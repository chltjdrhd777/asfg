import { CommonFlagHandlerParams, OnHanldeFlagParams } from '.';
import { generateExampleAPI } from './utils/generateExampleAPI';
import { generateNetwork } from './utils/generateNetwork';

interface NetFlagParams extends CommonFlagHandlerParams {}

export const netFlag = (netFlagParams: NetFlagParams) => {
  // 1. default network structure(axios 기반 client) 생성
  generateNetwork(netFlagParams);

  // 2. example API hook(react-query 기반) 생성
  const exampleFolderNameAndFileName = ['example', 'example'];
  netFlagParams.commands.commandGroupWithoutFlag = exampleFolderNameAndFileName;

  generateExampleAPI(netFlagParams);
};
