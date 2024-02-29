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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const mkdirp_1 = require("mkdirp");
const constants_1 = require("../../constants");
const generateComponent = ({ pageName, rootDir, config }) => {
    const componentFolderPath = path.join(rootDir, 'src/components', pageName); // todo config 통해서 변동 가능하도록.
    const componentFileName = 'index'; // todo config 통해서 변동 가능하도록.
    const componentFilePath = `${componentFolderPath}/${componentFileName}.tsx`;
    //1. generate component
    if (!fs.existsSync(componentFolderPath)) {
        mkdirp_1.mkdirp.sync(componentFolderPath);
    }
    if (!fs.existsSync(componentFilePath)) {
        const content = constants_1.constants.componentContent.getBaseComponentContent(pageName, config.alias);
        fs.writeFileSync(componentFilePath, content);
    }
    //2. generate hooks folder
    const hooksFolderPath = `${componentFolderPath}/hooks`;
    if (!fs.existsSync(hooksFolderPath)) {
        mkdirp_1.mkdirp.sync(hooksFolderPath);
    }
    //2. generate styles
    const styleFilePath = `${componentFolderPath}/${componentFileName}.styles.ts`;
    if (!fs.existsSync(styleFilePath)) {
        fs.writeFileSync(styleFilePath, '');
    }
};
exports.generateComponent = generateComponent;
