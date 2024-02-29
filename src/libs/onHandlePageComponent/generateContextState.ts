import * as fs from 'fs';
import * as path from 'path';
import { mkdirp } from 'mkdirp';

import { constants } from '../../constants';
import { CommonGenerateParams } from '.';
import { generateFolder } from '../generateFolder';
import { generateFile } from '../generateFile';

export const generateContextState = ({ pageName, rootDir }: CommonGenerateParams) => {
  //1. context state 폴더 생성
  const contextStateFolderPath = path.join(rootDir, 'src/contexts', pageName); //todo config 통해서 변경 가능하도록
  generateFolder(contextStateFolderPath);

  //2. context state file 생성
  const contextStateFileName = `use${pageName}ContextState`; // todo config 통해서 변동 가능하도록.
  const contextStateFilePath = `${contextStateFolderPath}/${contextStateFileName}.ts`;
  const contextStateContent = constants.contextStateContent.getBaseContextStateContent(pageName);
  generateFile(contextStateFilePath, contextStateContent);
};
