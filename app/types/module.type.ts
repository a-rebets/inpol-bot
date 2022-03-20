/**
 * Module Interface
 * =====================
 *
 * @contributors: Artem Popelyshev [@apopelyshev] <apopelyshev@gmail.com> (https://popelyshev.hashnode.dev)
 *
 * @license: MIT License
 *
 */

/**
 * ModuleInterface
 * =====================
 *
 * @interface [ModuleInterface](https://github.com/apopelyshev/inpol-bot/blob/main/app/types/module.type.ts)
 *
 * @param { String } text - input text
 *
 */
export interface ModuleInterface {
	/**
	 * Input text
	 * =====================
	 * Set text
	 *
	 * @interface [ModuleInterface](https://github.com/apopelyshev/inpol-bot/blob/main/app/types/module.type.ts)
	 *
	 * @param { String } text - input text
	 *
	 */
	text: string;
}

/**
 * ModuleResponseInterface
 * =====================
 *
 * @interface [ModuleResponseInterface](https://github.com/apopelyshev/inpol-bot/blob/main/app/types/module.type.ts)
 *
 * @return {fn} string - run app() for output text
 *
 */
export interface ModuleResponseInterface {
	/**
	 * Output text
	 * =====================
	 * Get text
	 *
	 * @interface [ModuleResponseInterface](https://github.com/apopelyshev/inpol-bot/blob/main/app/types/module.type.ts)
	 *
	 * @return {fn} string - run app() for output text
	 *
	 */
	app(): string;
}
