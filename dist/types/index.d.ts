import { getCommands } from '../utils/getCommands';
export type Flag = '-h' | '-help' | '-n';
export type GetCommandsReturnType = ReturnType<typeof getCommands>;
export interface ASFGConfig {
    alias?: string;
}
export interface DefaultCommonParams {
    commands: GetCommandsReturnType;
    config: ASFGConfig;
    rootDir: string;
}
