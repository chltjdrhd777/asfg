import { DefaultCommonParams } from '../../types';
import { hFlag } from './hFlag';
import { netFlag } from './netFlag';

export interface OnHanldeFlagParams extends DefaultCommonParams {}

export const onHelpFlag = () => {
  hFlag();
};

export const onHandleFlag = (onHanldeFlagParams: OnHanldeFlagParams) => {
  const flag = onHanldeFlagParams.commands.flag;

  //handle flag cases
  if (flag === '-h' || flag === '-help') hFlag();
  if (flag === '-net') netFlag(onHanldeFlagParams);
};
