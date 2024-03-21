import * as path from 'path';
import { pakages } from '@packages/index';
import { generateFile } from 'services/generateFile';
import { generateFolder } from 'services/generateFolder';

export const generateConfigFolder = (configFolderPath: string) => {
  const rl = pakages.ReadlineControl.getReadlineInstance();

  rl.question('There is no asfg.config folder. Do you want to create this? (y/yes)', (answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      // 1. config 폴더 생성
      generateFolder(configFolderPath);

      // 2. config.json 생성
      generateFile(path.join(configFolderPath, 'config.json'), '');

      // 3. .gitignore에 config 폴더 ignore 추가.

      process.exit();
    } else {
      console.log('Invalid input');

      process.exit();
    }
  });
};
