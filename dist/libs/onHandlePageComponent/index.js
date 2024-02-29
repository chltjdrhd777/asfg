"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onHandlePageComponent = void 0;
const utils_1 = require("../../utils");
const generateComponent_1 = require("./generateComponent");
const generateContextState_1 = require("./generateContextState");
const generatePage_1 = require("./generatePage");
const onHandlePageComponent = (onHandlePageComponentParams) => {
    var _a, _b;
    const pageName = utils_1.utils.getNaming((_a = onHandlePageComponentParams.commands.folderName) !== null && _a !== void 0 ? _a : '');
    const rootDir = (_b = utils_1.utils.getRootDirectory()) !== null && _b !== void 0 ? _b : '';
    const config = onHandlePageComponentParams.config;
    const commonGenerateParams = {
        pageName,
        rootDir,
        config,
    };
    // 1. contextState 생성
    (0, generateContextState_1.generateContextState)(commonGenerateParams);
    // 2. component 생성
    (0, generateComponent_1.generateComponent)(commonGenerateParams);
    // 3. page를 생성
    (0, generatePage_1.generatePage)(commonGenerateParams);
};
exports.onHandlePageComponent = onHandlePageComponent;
