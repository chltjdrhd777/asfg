import { getCommands } from '../utils/getCommands';

export type HelpFlg = '-h' | '-help';
export type NetworkFlag = '-net';
export type APIFlag = '-api';

export type Flag = HelpFlg | NetworkFlag | APIFlag;
export type GetCommandsReturnType = ReturnType<typeof getCommands>;

export interface ASFGConfig {
  alias?: string;
}

export interface DefaultCommonParams {
  commands: GetCommandsReturnType;
  config: ASFGConfig;
  rootDir: string;
}
