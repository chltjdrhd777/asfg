"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onHandlePageComponent = void 0;
const utils_1 = require("../../utils");
const generateComponent_1 = require("./generateComponent");
const generateContextState_1 = require("./generateContextState");
const generateCreatecontext_1 = require("./generateCreatecontext");
const generatePage_1 = require("./generatePage");
const onHandlePageComponent = (onHandlePageComponentParams) => {
    var _a;
    const pageName = utils_1.utils.getNaming((_a = onHandlePageComponentParams.commands.folderName) !== null && _a !== void 0 ? _a : '');
    const commonGenerateParams = Object.assign({ pageName }, onHandlePageComponentParams);
    // 0. createContext 훅 생성
    (0, generateCreatecontext_1.generateCreatecontext)(commonGenerateParams);
    // 1. contextState 생성
    (0, generateContextState_1.generateContextState)(commonGenerateParams);
    // 2. component 생성
    (0, generateComponent_1.generateComponent)(commonGenerateParams);
    // 3. page를 생성
    (0, generatePage_1.generatePage)(commonGenerateParams);
};
exports.onHandlePageComponent = onHandlePageComponent;
