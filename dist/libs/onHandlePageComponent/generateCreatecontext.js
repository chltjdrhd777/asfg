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
exports.generateCreatecontext = void 0;
const path = __importStar(require("path"));
const constants_1 = require("../../constants");
const generateFolder_1 = require("../generateFolder");
const generateFile_1 = require("../generateFile");
const generateCreatecontext = ({ rootDir }) => {
    //1. contexts 폴더 생성
    const contextsFolderPath = path.join(rootDir, 'src/contexts');
    (0, generateFolder_1.generateFolder)(contextsFolderPath);
    //2. create context 파일 생성.
    const createContextFilePath = `${contextsFolderPath}/createContext.tsx`;
    const createContextContent = constants_1.constants.contextStateContent.getBaseCreateContext();
    (0, generateFile_1.generateFile)(createContextFilePath, createContextContent);
};
exports.generateCreatecontext = generateCreatecontext;