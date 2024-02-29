import * as fs from 'fs';
import * as path from 'path';
import { mkdirp } from 'mkdirp';

import { CommonGenerateParams } from '.';
import { constants } from '../../constants';

export const generateCreatecontext = ({ rootDir }: CommonGenerateParams) => {
  const contextsFolderPath = path.join(rootDir, 'src/contexts');
  const createContextFilePath = `${contextsFolderPath}/createContext.tsx`;

  // 경로에 폴더가 없을 경우에 폴더 생성
  if (!fs.existsSync(contextsFolderPath)) {
    mkdirp.sync(contextsFolderPath);
  }

  // 폴더 내에 파일이 없을 경우에 파일 생성 및 내용 입력
  if (!fs.existsSync(createContextFilePath)) {
    const content = constants.contextStateContent.getBaseCreateContext();
    fs.writeFileSync(createContextFilePath, content);
  } else {
    console.log('already exist createContext.ts file');
  }
};
