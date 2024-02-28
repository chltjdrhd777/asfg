import readline from 'readline';

import { utils } from './utils';

//todo
// config 파일에도 반응하도록
// config에 들어갈 정보
// 1. path alias 유무

export function generateNextFolderStructure() {
  utils.consoleIntro();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('folder name : ', (input) => {
    const { folderName, flag } = utils.getCommands({ input, rl });

    //todo 폴더 이름이 있으므로
    // 1. 함수를 만들어서 page 폴더를 만드는 로직 작성하고
    // 2. 함수 만들어서 components/폴더명 으로 컴포넌트 만드는 로직 작성한다

    if (flag) {
    }

    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}

generateNextFolderStructure();
