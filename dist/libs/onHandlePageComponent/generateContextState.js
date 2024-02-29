"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateContextState = void 0;
const path = __importStar(require("path"));
const constants_1 = require("../../constants");
const generateFolder_1 = require("../generateFolder");
const generateFile_1 = require("../generateFile");
const generateContextState = ({ pageName, rootDir }) => {
    //1. context state 폴더 생성
    const contextStateFolderPath = path.join(rootDir, 'src/contexts', pageName); //todo config 통해서 변경 가능하도록
    (0, generateFolder_1.generateFolder)(contextStateFolderPath);
    //2. context state file 생성
    const contextStateFileName = `use${pageName}ContextState`; // todo config 통해서 변동 가능하도록.
    const contextStateFilePath = `${contextStateFolderPath}/${contextStateFileName}.ts`;
    const contextStateContent = constants_1.constants.contextStateContent.getBaseContextStateContent(pageName);
    (0, generateFile_1.generateFile)(contextStateFilePath, contextStateContent);
};
exports.generateContextState = generateContextState;
