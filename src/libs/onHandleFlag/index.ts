import { DefaultCommonParams } from '../../types';
import { apiFlag } from './apiFlag';
import { hFlag } from './hFlag';
import { netFlag } from './netFlag';

export interface OnHanldeFlagParams extends DefaultCommonParams {}
export interface CommonFlagHandlerParams extends OnHanldeFlagParams {
  networkFolderPath: string;
}

export const onHelpFlag = () => {
  hFlag();
};

export const onHandleFlag = (onHanldeFlagParams: OnHanldeFlagParams) => {
  const flag = onHanldeFlagParams.commands.flag;
  const networkFolderPath = 'src/network';

  const commonFlagHandlerParams: CommonFlagHandlerParams = {
    networkFolderPath,
    ...onHanldeFlagParams,
  };

  //handle flag cases
  if (flag === '-h' || flag === '-help') hFlag(flag);
  if (flag === '-net') netFlag(commonFlagHandlerParams);
  if (flag === '-api') apiFlag(commonFlagHandlerParams);
};
