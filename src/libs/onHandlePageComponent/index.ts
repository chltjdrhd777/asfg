import { ASFGConfig, GetCommandsReturnType } from '../../types';
import { utils } from '../../utils';
import { generateComponent } from './generateComponent';
import { generateContextState } from './generateContextState';
import { generatePage } from './generatePage';

export interface OnHandlePageComponentParams {
  commands: GetCommandsReturnType;
  config: ASFGConfig;
}

export interface CommonGenerateParams {
  pageName: string;
  rootDir: string;
  config: ASFGConfig;
}

export const onHandlePageComponent = (onHandlePageComponentParams: OnHandlePageComponentParams) => {
  const pageName = utils.getNaming(onHandlePageComponentParams.commands.folderName ?? '');
  const rootDir = utils.getRootDirectory() ?? '';
  const config = onHandlePageComponentParams.config;
  const commonGenerateParams = {
    pageName,
    rootDir,
    config,
  };

  // 1. contextState 생성
  generateContextState(commonGenerateParams);

  // 2. component 생성
  generateComponent(commonGenerateParams);

  // 3. page를 생성
  generatePage(commonGenerateParams);
};
