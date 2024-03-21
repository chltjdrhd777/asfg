import * as path from 'path';
import { constants } from '../../../constants';
import { generateFolder } from '../../generateFolder';
import { generateFile } from '../../generateFile';
import { OnHanldeFlagParams } from '..';

export interface CreateNetworkParams extends OnHanldeFlagParams {
  networkFolderPath: string;
}

export const generateNetwork = ({ rootDir, networkFolderPath }: CreateNetworkParams) => {
  //1. network 폴더 생성
  const resourceFolderPath = path.join(rootDir, networkFolderPath);
  generateFolder(resourceFolderPath);

  //2. apiClient 폴더 생성
  const apiClientFolderPath = path.join(rootDir, networkFolderPath, 'apiClient');
  generateFolder(apiClientFolderPath);

  //4. baseConfig.ts 파일 생성
  const baseConfigFilePath = path.join(apiClientFolderPath, 'baseConfig.ts');
  const baseConfigContent = constants.networkContent.baseConfigContent;
  generateFile(baseConfigFilePath, baseConfigContent, `create baseConfig : ${baseConfigFilePath}`);

  //4. index.ts(instance 초기화) 생성
  const clientIndexFilePath = path.join(apiClientFolderPath, 'index.ts');
  const clientIndexContent = constants.networkContent.clientIndexContent;
  generateFile(clientIndexFilePath, clientIndexContent, `create clientIndex : ${clientIndexFilePath}`);
};
