import * as fs from 'fs';
import * as path from 'path';
import { mkdirp } from 'mkdirp';

import { constants } from '../../constants';
import { CommonGenerateParams } from '.';

export const generateContextState = ({ pageName, rootDir }: CommonGenerateParams) => {
  const contextStateFolderPath = path.join(rootDir, 'src/contexts', pageName); //todo config 통해서 변경 가능하도록
  const contextStateFileName = `use${pageName}ContextState`; // todo config 통해서 변동 가능하도록.
  const contextStateFilePath = `${contextStateFolderPath}/${contextStateFileName}.ts`;

  // 경로에 폴더가 없을 경우에 폴더 생성
  if (!fs.existsSync(contextStateFolderPath)) {
    mkdirp.sync(contextStateFolderPath);
  }

  // 폴더 내에 파일이 없을 경우에 파일 생성 및 내용 입력
  if (!fs.existsSync(contextStateFilePath)) {
    const content = constants.contextStateContent.getBaseContextStateContent(pageName);
    fs.writeFileSync(contextStateFilePath, content);
  } else {
    console.log('already exist context state file');
  }
};
