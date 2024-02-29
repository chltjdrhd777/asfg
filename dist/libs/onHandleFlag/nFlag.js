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
exports.nFlag = void 0;
const path = __importStar(require("path"));
const constants_1 = require("../../constants");
const generateFolder_1 = require("../generateFolder");
const generateFile_1 = require("../generateFile");
const nFlag = (onHanldeFlagParams) => {
    const { rootDir } = onHanldeFlagParams;
    const middlePath = 'src/network';
    //1. network 폴더 생성
    const networkFolderPath = path.join(rootDir, middlePath);
    (0, generateFolder_1.generateFolder)(networkFolderPath);
    //2. apiClient 폴더 생성
    const apiClientFolderPath = path.join(rootDir, middlePath, 'apiClient');
    (0, generateFolder_1.generateFolder)(apiClientFolderPath);
    //4. baseConfig.ts 파일 생성
    const baseConfigFilePath = `${apiClientFolderPath}/baseConfig.ts`;
    const baseConfigContent = constants_1.constants.networkContent.baseConfigContent;
    (0, generateFile_1.generateFile)(baseConfigFilePath, baseConfigContent);
    //4. index.ts(instance 초기화) 생성
    const clientIndexFilePath = `${apiClientFolderPath}/index.ts`;
    const clientIndexContent = constants_1.constants.networkContent.clientIndexContent;
    (0, generateFile_1.generateFile)(clientIndexFilePath, clientIndexContent);
};
exports.nFlag = nFlag;
