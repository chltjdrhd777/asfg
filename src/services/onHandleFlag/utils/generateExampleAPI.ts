import * as path from 'path';
import { constants } from '../../../constants';
import { generateFolder } from '../../generateFolder';
import { generateFile } from '../../generateFile';
import { OnHanldeFlagParams } from '..';
import { CreateNetworkParams, generateNetwork } from './generateNetwork';
import { utils } from '../../../utils';

export interface CreateExampleQueryParams extends OnHanldeFlagParams {
  networkFolderPath: string;
}

export const generateExampleAPI = (createExampleQueryParams: CreateExampleQueryParams) => {
  const { commands, config, networkFolderPath } = createExampleQueryParams;

  // 1. default network folder & client 생성(이미 있으면 생성하지 않음)
  generateNetwork(createExampleQueryParams);

  //2. API folder 생성
  const apiFolderName = utils.getNaming(String(commands.commandGroupWithoutFlag[0]));
  const apiFolderPath = path.join(networkFolderPath, apiFolderName);
  generateFolder(apiFolderPath);

  //2. API file 생성
  const apiFileName = utils.getNaming(`${String(commands.commandGroupWithoutFlag[1])}API.ts`);
  const apiFilePath = path.join(apiFolderPath, `${apiFileName}.ts`);
  const apiFileContent = constants.exampleAPIContent.getBaseExampleAPIContent();
  generateFile(apiFilePath, apiFileContent, `create API : ${apiFilePath}`);
};
