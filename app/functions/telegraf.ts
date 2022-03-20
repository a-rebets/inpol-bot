/**
 * Telegraf
 * =====================
 *
 * @contributors: Artem Popelyshev [@apopelyshev] <apopelyshev@gmail.com> (https://popelyshev.hashnode.dev)
 *
 * @license: MIT License
 *
 */
import { Telegraf } from "telegraf";
import configs from "@configs/config";

const bot = new Telegraf(configs.telegram.token);

export { bot };
export default bot;
