import { GetCommandsReturnType } from '../../types';
import { hFlag } from './hFlag';

export interface OnHanldeFlagParams extends GetCommandsReturnType {}

export const onHelpFlag = () => {
  hFlag();
};

export const onHandleFlag = ({ folderName, flag }: OnHanldeFlagParams) => {};

// export interface OnCreatePageStructureParmas extends GetCommandsReturnType {}

// export const onCreatePageStructure = ({ folderName, flag }: OnCreatePageStructureParmas) => {
//   console.log('create 작동해?');
// };
