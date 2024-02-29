import * as fs from 'fs';
import * as path from 'path';
import { mkdirp } from 'mkdirp';

import { constants } from '../../constants';
import { CommonGenerateParams } from '.';

export const generateComponent = ({ pageName, rootDir, config }: CommonGenerateParams) => {
  const componentFolderPath = path.join(rootDir, 'src/components', pageName); // todo config 통해서 변동 가능하도록.
  const componentFileName = 'index'; // todo config 통해서 변동 가능하도록.
  const componentFilePath = `${componentFolderPath}/${componentFileName}.tsx`;

  //1. generate component
  if (!fs.existsSync(componentFolderPath)) {
    mkdirp.sync(componentFolderPath);
  }

  if (!fs.existsSync(componentFilePath)) {
    const content = constants.componentContent.getBaseComponentContent(pageName, config.alias!);
    fs.writeFileSync(componentFilePath, content);
  }

  //2. generate hooks folder
  const hooksFolderPath = `${componentFolderPath}/hooks`;
  if (!fs.existsSync(hooksFolderPath)) {
    mkdirp.sync(hooksFolderPath);
  }

  //2. generate styles
  const styleFilePath = `${componentFolderPath}/${componentFileName}.styles.ts`;
  if (!fs.existsSync(styleFilePath)) {
    fs.writeFileSync(styleFilePath, '');
  }
};
