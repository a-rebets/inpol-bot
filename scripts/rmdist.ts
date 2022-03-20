/**
 * Delete dist folder
 * =====================
 *
 * @contributors: Artem Popelyshev [@apopelyshev] <apopelyshev@gmail.com> (https://popelyshev.hashnode.dev)
 *
 * @license: MIT License
 *
 */
import * as shell from "shelljs";
declare const __dirname: string;

const path = `${__dirname}/../dist`;

shell.rm("-Rf", path);
