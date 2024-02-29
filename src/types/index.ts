import { getCommands } from '../utils/getCommands';

export type Flag = '-h' | '-help';
export type GetCommandsReturnType = ReturnType<typeof getCommands>;

export interface ASFGConfig {
  alias?: string;
}
