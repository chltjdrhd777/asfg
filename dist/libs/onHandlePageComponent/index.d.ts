import { DefaultCommonParams } from '../../types';
export interface OnHandlePageComponentParams extends DefaultCommonParams {
}
export interface CommonGenerateParams extends OnHandlePageComponentParams {
    pageName: string;
}
export declare const onHandlePageComponent: (onHandlePageComponentParams: OnHandlePageComponentParams) => void;
