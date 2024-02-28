"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommands = void 0;
const guideText_1 = require("../constants/guideText");
const getCommands = ({ input = '', rl }) => {
    const split = input.split(' ');
    const folderName = split.filter((t) => !t.startsWith('-'))[0];
    const flag = split.find((t) => t.startsWith('-'));
    if (!folderName) {
        console.log(guideText_1.guideText.noFolderName);
        return process.exit();
    }
    return {
        folderName,
        flag,
    };
};
exports.getCommands = getCommands;
