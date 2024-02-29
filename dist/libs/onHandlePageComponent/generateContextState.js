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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const mkdirp_1 = require("mkdirp");
const constants_1 = require("../../constants");
const generateContextState = ({ pageName, rootDir }) => {
    const contextStateFolderPath = path.join(rootDir, 'src/contexts', pageName); //todo config 통해서 변경 가능하도록
    const contextStateFileName = `use${pageName}ContextState`; // todo config 통해서 변동 가능하도록.
    const contextStateFilePath = `${contextStateFolderPath}/${contextStateFileName}.ts`;
    // 경로에 폴더가 없을 경우에 폴더 생성
    if (!fs.existsSync(contextStateFolderPath)) {
        mkdirp_1.mkdirp.sync(contextStateFolderPath);
    }
    // 폴더 내에 파일이 없을 경우에 파일 생성 및 내용 입력
    if (!fs.existsSync(contextStateFilePath)) {
        const content = constants_1.constants.contextStateContent.getBaseContextStateContent(pageName);
        fs.writeFileSync(contextStateFilePath, content);
    }
    else {
        console.log('already exist context state file');
    }
};
exports.generateContextState = generateContextState;
