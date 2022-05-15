# 🤖 inpol-bot

<!-- all-shields/header-badges:START -->

[![v1.0.0](https://img.shields.io/badge/version-v1.0.0-lightgray.svg?style=flat&logo=)](https://github.com/apopelyshev/inpol-bot/blob/main/CHANGELOG.md) [![](https://img.shields.io/npm/v/@apopelyshev/inpol-bot?color=CC3534&logo=npm)](https://www.npmjs.com/package/@apopelyshev/inpol-bot) [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)](https://github.com/apopelyshev/inpol-bot/blob/main/LICENSE.md) [![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![ECMAScript: 2019](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262) [![Discord Server](https://discordapp.com/api/guilds/383373985666301975/embed.png)](https://discord.ptkdev.io)

<!-- all-shields/header-badges:END -->

//TODO

## 📎 Menu

-   💡 [Features](#-features)
-   📚 [Documentation](#-documentation)
-   🔨 [Developer Mode](#-developer-mode)
-   -   🏁 [Run Project](#-run-project)
-   -   💾 [Setup Project](#-setup-project)
-   -   🚀 [Deploy](#-deploy)

## 🔨 Developer Mode

### 🏁 Run Project

1. Clone this repository or download [nightly](https://github.com/apopelyshev/inpol-bot/archive/nightly.zip), [beta](https://github.com/apopelyshev/inpol-bot/archive/beta.zip) or [stable](https://github.com/apopelyshev/inpol-bot/archive/main.zip).
2. Write to [@botfather](https://t.me/botfather) on telegram and create new bot (save token and set bot username)
3. Run with correct values: `npm run init:token --username name_bot --token 1234:asdfghjkl`
4. Run `npm run init`
5. Run `npm run dev`
6. Write `/start` on telegram bot.

### 💾 Setup Project

If you want to replace all strings (example: package name, author, URLs, etc...) in the markdown file, source files and others files of this project you need to edit `setup.json` with correct values and run `npm run setup`.

#### 🪝 Configuring Webhooks

If you want to run the bot using [webhooks](https://core.telegram.org/bots/api#setwebhook) you need to place your SSL certificate and Private key in the `certs` directory and configure the webhook object in the config file like:

```javascript
webhook: {
 url: "https://my.host.com:8443", // or DNS name
 port: 8443,
 selfSigned: true
},
```

If you want to run the bot with your self-signed certificate `selfSigned` flag needs to be set to `true`, this will allow us to communicate to Telegram that our webhook server can be trusted. More information about webhooks with self-signed certificates can be found [here](https://core.telegram.org/bots/self-signed)

you can generate your self-signed certificate using the utility script:

`npm run init:certs [common-name]`

Replace `common-name` with the same host-name or IP address you are using in the `webhook.url` path of the `config.js` file

## 🖥️ Deploy

### 🚀 Native Run

Deploy bot to your server and:

1. Run with correct values: `npm run init:token --token asdfghjkl`
2. Run init `npm run init`
3. Generate release `npm run release`
4. Start bot `npm run start-pm2`

### 🐳 Docker

You can also release and run your bot as a Docker container.

```sh
docker run ptkdev/inpol-bot:<version>
```

where `<version>` can be one of the releases (ex. v1.0.0) or `latest`

For your convenience, in case you would like to run the bot in `webhook` mode, we have already exposed `8443` port on our docker files.

To change the configuration to match yours, just change the Dockerfile line with the `EXPOSE` instruction

```docker
EXPOSE 8443
```

in the end, you'll be able to expose the docker port using `-p <port>:<host-port>` docker parameter.

The preferred way to provide the configuration file is to mount the final configuration under `/app/dist/configs/config.js`:

```sh
docker run -v ${PWD}/app/configs/config.js:/app/dist/configs/config.js ptkdev/inpol-bot:<version>
```

> Note: the docker images have been prepared for many architectures but have been tested mainly on amd64 architecture.

## 📚 Documentation

Run `npm run docs`

## License

-   Code and Contributions have **MIT License**
-   Images and logos have **CC BY-NC 4.0 License**

#### Copyright (c) 2022 [Artem Popelyshev](https://popelyshev.hashnode.dev)
