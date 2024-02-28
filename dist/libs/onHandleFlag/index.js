"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onHandleFlag = exports.onHelpFlag = void 0;
const hFlag_1 = require("./hFlag");
const onHelpFlag = () => {
    (0, hFlag_1.hFlag)();
};
exports.onHelpFlag = onHelpFlag;
const onHandleFlag = ({ folderName, flag }) => { };
exports.onHandleFlag = onHandleFlag;
