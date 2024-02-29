import * as fs from 'fs';
import * as path from 'path';
import { mkdirp } from 'mkdirp';

import { CommonGenerateParams } from '.';
import { constants } from '../../constants';
import { generateFolder } from '../generateFolder';
import { generateFile } from '../generateFile';

export const generateCreatecontext = ({ rootDir }: CommonGenerateParams) => {
  //1. contexts 폴더 생성
  const contextsFolderPath = path.join(rootDir, 'src/contexts');
  generateFolder(contextsFolderPath);

  //2. create context 파일 생성.
  const createContextFilePath = `${contextsFolderPath}/createContext.tsx`;
  const createContextContent = constants.contextStateContent.getBaseCreateContext();
  generateFile(createContextFilePath, createContextContent);
};
