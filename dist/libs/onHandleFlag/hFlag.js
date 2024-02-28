"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hFlag = void 0;
const guideText_1 = require("../../constants/guideText");
const hFlag = () => {
    const argvs = process.argv.slice(2);
    if (argvs.includes('-h') || argvs.includes('-help')) {
        console.log(guideText_1.guideText.help);
        process.exit();
    }
};
exports.hFlag = hFlag;
