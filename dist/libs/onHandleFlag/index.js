"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onHandleFlag = exports.onHelpFlag = void 0;
const hFlag_1 = require("./hFlag");
const nFlag_1 = require("./nFlag");
const onHelpFlag = () => {
    (0, hFlag_1.hFlag)();
};
exports.onHelpFlag = onHelpFlag;
const onHandleFlag = (onHanldeFlagParams) => {
    const flag = onHanldeFlagParams.commands.flag;
    //handle flag cases
    if (flag === '-h' || flag === '-help')
        (0, hFlag_1.hFlag)();
    if (flag === '-n')
        (0, nFlag_1.nFlag)(onHanldeFlagParams);
};
exports.onHandleFlag = onHandleFlag;
