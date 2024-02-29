import * as path from 'path';

import { constants } from '../../constants';
import { OnHanldeFlagParams } from '.';
import { generateFolder } from '../generateFolder';
import { generateFile } from '../generateFile';

export const nFlag = (onHanldeFlagParams: OnHanldeFlagParams) => {
  const { rootDir } = onHanldeFlagParams;
  const middlePath = 'src/network';

  //1. network 폴더 생성
  const networkFolderPath = path.join(rootDir, middlePath);
  generateFolder(networkFolderPath);

  //2. apiClient 폴더 생성
  const apiClientFolderPath = path.join(rootDir, middlePath, 'apiClient');
  generateFolder(apiClientFolderPath);

  //4. baseConfig.ts 파일 생성
  const baseConfigFilePath = `${apiClientFolderPath}/baseConfig.ts`;
  const baseConfigContent = constants.networkContent.baseConfigContent;
  generateFile(baseConfigFilePath, baseConfigContent);

  //4. index.ts(instance 초기화) 생성
  const clientIndexFilePath = `${apiClientFolderPath}/index.ts`;
  const clientIndexContent = constants.networkContent.clientIndexContent;
  generateFile(clientIndexFilePath, clientIndexContent);
};
