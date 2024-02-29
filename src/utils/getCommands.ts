import readline from 'readline';
import { guideText } from '../constants/guideText';
import { Flag } from '../types';

export interface GetCommandsParams {
  input: string;
  rl?: readline.Interface;
}

export const getCommands = ({ input = '' }: GetCommandsParams) => {
  const split = input.split(' ');

  const folderName = split.filter((t) => !t.startsWith('-'))[0];
  const flag = split.find((t) => t.startsWith('-')) as Flag | undefined;

  if (!folderName) {
    console.log(guideText.noFolderName);
    return process.exit();
  }

  return {
    folderName,
    flag,
  };
};
