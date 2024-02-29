import * as fs from 'fs';
import * as path from 'path';
import { mkdirp } from 'mkdirp';

import { getBasePageContent } from '../../constants/pageContent/getBasePageContent';
import { CommonGenerateParams } from '.';

export const generatePage = ({ pageName, rootDir }: CommonGenerateParams) => {
  const pageFolderPath = path.join(rootDir, 'src/app', pageName); //todo 해당 부분은 config로 조절 가능하도록.
  const pageFilePath = `${pageFolderPath}/page.tsx`;

  // 경로에 폴더가 없을 경우에 폴더 생성
  if (!fs.existsSync(pageFolderPath)) {
    mkdirp.sync(pageFolderPath);
  }

  // 폴더 내에 파일이 없을 경우에 파일 생성 및 내용 입력
  if (!fs.existsSync(pageFilePath)) {
    const pageContent = getBasePageContent(pageName);
    fs.writeFileSync(pageFilePath, pageContent);
  } else {
    console.log('already exist page file');
  }
};
