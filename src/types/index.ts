import { getCommands } from '../utils/getCommands';

export type HelpFlg = '-h' | '-help';
export type NetworkFlag = '-net';
export type APIFlag = '-api';
export type CustomFLag = '-c' | '-custom';

export type Flag = HelpFlg | NetworkFlag | APIFlag | CustomFLag;
export type GetCommandsReturnType = ReturnType<typeof getCommands>;

export interface ASFGConfig {
  alias?: string;
}

export interface DefaultParams {
  commands: GetCommandsReturnType;
  config: ASFGConfig;
  rootDir: string;
}
