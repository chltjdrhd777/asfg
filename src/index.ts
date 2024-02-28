import readline from 'readline';

import { utils } from './utils';
import { libs } from './libs';

//todo
// config 파일에도 반응하도록
// config에 들어갈 정보
// 1. path alias 유무

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

    if (commands.flag) {
      libs.onHandleFlag(commands);
    } else {
      libs.onCreatePageStructure(commands);
    }

    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}

generateNextFolderStructure();
