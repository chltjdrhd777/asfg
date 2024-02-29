import readline from 'readline';
import { guideText } from '../constants/guideText';
import { Flag } from '../types';

export interface GetCommandsParams {
  input: string;
  rl?: readline.Interface;
}

export const getCommands = ({ input = '' }: GetCommandsParams) => {
  const split = input.split(' ');

  const resourceName = split.filter((t) => !t.startsWith('-'))[0];
  const flag = split.find((t) => t.startsWith('-')) as Flag | undefined;

  if (!resourceName && !flag) {
    console.log(guideText.noResourceName);
    return process.exit();
  }

  return {
    resourceName,
    flag,
  };
};
