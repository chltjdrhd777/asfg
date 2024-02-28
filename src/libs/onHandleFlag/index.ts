import { GetCommandsReturnType } from '../../types';
import { hFlag } from './hFlag';

export interface OnHanldeFlagParams extends GetCommandsReturnType {}

export const onHelpFlag = () => {
  hFlag();
};

export const onHandleFlag = ({ folderName, flag }: OnHanldeFlagParams) => {};
