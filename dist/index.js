#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNextFolderStructure = void 0;
const readline_1 = __importDefault(require("readline"));
const utils_1 = require("./utils");
const libs_1 = require("./libs");
const constants_1 = require("./constants");
//todo
// config 파일에도 반응하도록
// config에 들어갈 정보
// 1. path alias 유무
function generateNextFolderStructure() {
    // 초기 -h나 -help 입력 시, help text 콘솔에 표출
    libs_1.libs.onHelpFlag();
    // 그 이외의 로직 처리 시작
    utils_1.utils.consoleIntro();
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('folder name : ', (input) => {
        const commands = utils_1.utils.getCommands({ input, rl });
        const ASFGConfig = undefined;
        const config = ASFGConfig !== null && ASFGConfig !== void 0 ? ASFGConfig : constants_1.constants.defaultASFGConfig; //todo config 파일 읽어오도록 한다.
        if (commands.flag) {
            libs_1.libs.onHandleFlag(commands);
        }
        else {
            libs_1.libs.onHandlePageComponent({ commands, config });
        }
        rl.close();
    });
    rl.on('close', () => {
        process.exit();
    });
}
exports.generateNextFolderStructure = generateNextFolderStructure;
generateNextFolderStructure();
