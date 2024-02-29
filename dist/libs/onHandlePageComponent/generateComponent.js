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
exports.generateComponent = void 0;
const path = __importStar(require("path"));
const constants_1 = require("../../constants");
const generateFolder_1 = require("../generateFolder");
const generateFile_1 = require("../generateFile");
const generateComponent = ({ pageName, rootDir, config }) => {
    //1. component 폴더 생성
    const componentFolderPath = path.join(rootDir, 'src/components', pageName); // todo config 통해서 변동 가능하도록.
    (0, generateFolder_1.generateFolder)(componentFolderPath);
    //2. component 파일 생성
    const componentFileName = 'index'; // todo config 통해서 변동 가능하도록.
    const componentFilePath = `${componentFolderPath}/${componentFileName}.tsx`;
    const componentContent = constants_1.constants.componentContent.getBaseComponentContent(pageName, config.alias);
    (0, generateFile_1.generateFile)(componentFilePath, componentContent);
    //3. hooks 폴더 생성
    const hooksFolderPath = `${componentFolderPath}/hooks`;
    (0, generateFolder_1.generateFolder)(hooksFolderPath);
    //4. styles 폴더 생성
    const styleFilePath = `${componentFolderPath}/${componentFileName}.styles.ts`;
    (0, generateFolder_1.generateFolder)(styleFilePath);
};
exports.generateComponent = generateComponent;
