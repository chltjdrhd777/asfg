import readline from 'readline';

import { CommonFlagHandlerParams } from '.';
import { isResourceExist } from '../../utils/isResourceExist';
import { generateConfigFolder } from './utils/generateConfigFolder';

interface CFlagParams extends CommonFlagHandlerParams {}

export const cFlag = ({ rootDir }: CFlagParams) => {
  const { resourcePath: configFolderPath, isExist: isConfigFolderExist } = isResourceExist([rootDir, 'asfg.config']);

  // 1. 만약 asfg.config 폴더가 없으면 생성을 물어보는 readline question 생성
  if (!isConfigFolderExist) {
    generateConfigFolder(configFolderPath);
  } else {
  }
};
