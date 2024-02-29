/// <reference types="node" />
import readline from 'readline';
import { Flag } from '../types';
export interface GetCommandsParams {
    input: string;
    rl?: readline.Interface;
}
export declare const getCommands: ({ input }: GetCommandsParams) => {
    folderName: string;
    flag: Flag | undefined;
};
