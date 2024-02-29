import readline from 'readline';

import { utils } from './utils';
import { libs } from './libs';
import { ASFGConfig } from './types';
import { constants } from './constants';

export function generateNextFolderStructure() {
  // 초기 -h나 -help 입력 시, help text 콘솔에 표출
  libs.onHelpFlag();

  // 그 이외의 로직 처리 시작
  utils.consoleIntro();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('folder name : ', (input) => {
    const commands = utils.getCommands({ input, rl });
    const ASFGConfig = undefined;
    const config: ASFGConfig = ASFGConfig ?? constants.defaultASFGConfig; //todo config 파일 읽어오도록 한다.

    if (commands.flag) {
      libs.onHandleFlag(commands);
    } else {
      libs.onHandlePageComponent({ commands, config });
    }

    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}

generateNextFolderStructure();
