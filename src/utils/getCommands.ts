import readline from 'readline';
import { guideText } from '../constants/guideText';

interface GetCommandsParams {
  input: string;
  rl?: readline.Interface;
}

export function getCommands({ input = '', rl }: GetCommandsParams) {
  const split = input.split(' ');

  const folderName = split.filter((t) => !t.startsWith('-'))[0];
  const flag = split.find((t) => t.startsWith('-'));

  if (!folderName) {
    console.log(guideText.noFolderName);
    return process.exit();
  }

  return {
    folderName,
    flag,
  };
}
