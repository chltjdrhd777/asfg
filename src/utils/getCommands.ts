import readline from 'readline';
import { guideText } from '../constants/guideText';
import { Flag } from '../types';

export interface GetCommandsParams {
  input: string;
  rl?: readline.Interface;
}

export const getCommands = ({ input = '' }: GetCommandsParams) => {
  const split = input.split(' ').map((t) => t.replace(/\s/gi, ''));

  const commandGroupWithoutFlag = split.filter((t) => !t.startsWith('-'));
  const resourceName = String(commandGroupWithoutFlag[0]);
  const flagIndex = split.findIndex((t) => t.startsWith('-'));

  if (!resourceName && flagIndex === -1) {
    console.log(guideText.noResourceName);
    return process.exit();
  }

  return {
    commandGroupWithoutFlag,
    resourceName,
    flag: split[flagIndex] as Flag | undefined,
  };
};
