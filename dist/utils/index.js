"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
const getCommands_1 = require("./getCommands");
const consoleIntro_1 = require("./consoleIntro");
const getNaming_1 = require("./getNaming");
const getRootDirectory_1 = require("./getRootDirectory");
exports.utils = {
    getCommands: getCommands_1.getCommands,
    consoleIntro: consoleIntro_1.consoleIntro,
    getNaming: getNaming_1.getNaming,
    getRootDirectory: getRootDirectory_1.getRootDirectory,
};
