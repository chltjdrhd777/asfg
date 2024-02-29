import { ASFGConfig, GetCommandsReturnType } from '../../types';
export interface OnHandlePageComponentParams {
    commands: GetCommandsReturnType;
    config: ASFGConfig;
}
export interface CommonGenerateParams {
    pageName: string;
    rootDir: string;
    config: ASFGConfig;
}
export declare const onHandlePageComponent: (onHandlePageComponentParams: OnHandlePageComponentParams) => void;
