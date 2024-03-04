import * as path from 'path';

import { getBasePageContent } from '../../constants/pageContent/getBasePageContent';
import { CommonGenerateParams } from '.';
import { generateFolder } from '../generateFolder';
import { generateFile } from '../generateFile';

export const generatePage = ({ commands: { resourceName }, pageName, rootDir }: CommonGenerateParams) => {
  //1. page 폴더 생성
  const pageFolderPath = path.join(rootDir, 'src/app', resourceName); //todo 해당 부분은 config로 조절 가능하도록.
  generateFolder(pageFolderPath);

  //2. page 파일 생성
  const pageFilePath = `${pageFolderPath}/page.tsx`;
  const pageContent = getBasePageContent(pageName);
  generateFile(pageFilePath, pageContent);
};
