import * as command from "@app/functions/commands";
import * as hears from "@app/functions/hears";

/**
 * Start bot
 * =====================
 *
 * @contributors: Artem Popelyshev [@apopelyshev] <apopelyshev@gmail.com> (https://popelyshev.hashnode.dev)
 *
 * @license: MIT License
 *
 */
(async () => {
	await command.quit();
	await command.start();
	await command.sendPhoto();
	await hears.text();
	await command.launch();
})();
