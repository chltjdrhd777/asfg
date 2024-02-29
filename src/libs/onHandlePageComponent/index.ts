import { ASFGConfig, DefaultCommonParams, GetCommandsReturnType } from '../../types';
import { utils } from '../../utils';
import { generateComponent } from './generateComponent';
import { generateContextState } from './generateContextState';
import { generateCreatecontext } from './generateCreatecontext';
import { generatePage } from './generatePage';

export interface OnHandlePageComponentParams extends DefaultCommonParams {}
export interface CommonGenerateParams extends OnHandlePageComponentParams {
  pageName: string;
}

export const onHandlePageComponent = (onHandlePageComponentParams: OnHandlePageComponentParams) => {
  const pageName = utils.getNaming(onHandlePageComponentParams.commands.resourceName ?? '');
  const commonGenerateParams: CommonGenerateParams = {
    pageName,
    ...onHandlePageComponentParams,
  };

  // 0. createContext 훅 생성
  generateCreatecontext(commonGenerateParams);

  // 1. contextState 생성
  generateContextState(commonGenerateParams);

  // 2. component 생성
  generateComponent(commonGenerateParams);

  // 3. page를 생성
  generatePage(commonGenerateParams);
};
