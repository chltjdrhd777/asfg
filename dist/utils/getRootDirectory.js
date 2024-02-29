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
exports.getRootDirectory = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const getRootDirectory = () => {
    // node가 호출된 경로
    const cwd = process.cwd();
    // package.json 파일 경로
    const packageJsonPath = findPackageJson(cwd);
    // Next.js 프로젝트의 root 디렉토리
    const rootDirectory = path.dirname(packageJsonPath);
    return rootDirectory;
};
exports.getRootDirectory = getRootDirectory;
function findPackageJson(cwd) {
    const packageJsonPath = path.join(cwd, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
        return packageJsonPath;
    }
    else {
        const parentDirectory = path.resolve(cwd, '..');
        if (parentDirectory === cwd) {
            console.debug('cannot find package.json');
            return parentDirectory;
        }
        return findPackageJson(parentDirectory);
    }
}
