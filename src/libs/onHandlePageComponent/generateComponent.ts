import * as fs from 'fs';
import * as path from 'path';

import { constants } from '../../constants';
import { CommonGenerateParams } from '.';
import { generateFolder } from '../generateFolder';
import { generateFile } from '../generateFile';

export const generateComponent = ({ pageName, rootDir, config }: CommonGenerateParams) => {
  //1. component 폴더 생성
  const componentFolderPath = path.join(rootDir, 'src/components', pageName); // todo config 통해서 변동 가능하도록.
  generateFolder(componentFolderPath);

  //2. component 파일 생성
  const componentFileName = 'index'; // todo config 통해서 변동 가능하도록.
  const componentFilePath = `${componentFolderPath}/${componentFileName}.tsx`;
  const componentContent = constants.componentContent.getBaseComponentContent(pageName, config.alias!);
  generateFile(componentFilePath, componentContent);

  //3. hooks 폴더 생성
  const hooksFolderPath = `${componentFolderPath}/hooks`;
  generateFolder(hooksFolderPath);

  //4. styles 파일 생성
  const styleFilePath = `${componentFolderPath}/${componentFileName}.styles.ts`;
  const styleContent = constants.styleContent.getBaseStyleContent();
  generateFile(styleFilePath, styleContent);
};
