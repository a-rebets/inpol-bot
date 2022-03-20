/**
 * Jest Tests
 * =====================
 *
 * @contributors: Artem Popelyshev [@apopelyshev] <apopelyshev@gmail.com> (https://popelyshev.hashnode.dev)
 *
 * @license: MIT License
 *
 */
import m from "../functions/module";

test("show hello world", async () => {
	const { app } = await m({ text: "hello-world" });
	expect(app()).toBe("hello-world");
});
