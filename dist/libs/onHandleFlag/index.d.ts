import { GetCommandsReturnType } from '../../types';
export interface OnHanldeFlagParams extends GetCommandsReturnType {
}
export declare const onHelpFlag: () => void;
export declare const onHandleFlag: ({ folderName, flag }: OnHanldeFlagParams) => void;
