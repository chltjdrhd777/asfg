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
exports.generatePage = void 0;
const path = __importStar(require("path"));
const getBasePageContent_1 = require("../../constants/pageContent/getBasePageContent");
const generateFolder_1 = require("../generateFolder");
const generateFile_1 = require("../generateFile");
const generatePage = ({ pageName, rootDir }) => {
    //1. page 폴더 생성
    const pageFolderPath = path.join(rootDir, 'src/app', pageName); //todo 해당 부분은 config로 조절 가능하도록.
    (0, generateFolder_1.generateFolder)(pageFolderPath);
    //2. page 파일 생성
    const pageFilePath = `${pageFolderPath}/page.tsx`;
    const pageContent = (0, getBasePageContent_1.getBasePageContent)(pageName);
    (0, generateFile_1.generateFile)(pageFilePath, pageContent);
};
exports.generatePage = generatePage;
