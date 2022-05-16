FROM node:14-alpine AS builder

WORKDIR /inpol-bot

COPY . /inpol-bot

ENV LANG en_US.utf8

# Install project dependencies
RUN npm ci && \
    npm run test && \
    npm run release

FROM node:14-alpine AS runtime

ENV NODE_ENV=production
ENV PM2_HOME=/app/.pm2

EXPOSE 8443

WORKDIR /app

COPY --from=builder \
    /inpol-bot/package.json \
    /inpol-bot/package-lock.json \
    /inpol-bot/.pm2-docker.json \
    ./

RUN npm ci --production && \
    npm cache clean --force && \
    mkdir databases

COPY --from=builder /inpol-bot/dist dist

RUN chown -R node:"$(id -u node)" /app

RUN sed -i 's/pidusage(pids, function retPidUsage(err, statistics) {/pidusage(pids, { usePs: true }, function retPidUsage(err, statistics) {/' ./node_modules/pm2/lib/God/ActionMethods.js

RUN apk --no-cache add procps

USER node

CMD ["npm", "run", "start-docker"]
