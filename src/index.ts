import readline from 'readline';

import { utils } from './utils';
import { libs } from './services';
import { ASFGConfig, DefaultParams } from './types';
import { constants } from './constants';
import { pakages } from './packages';

export function generateStructure() {
  // 초기 -h나 -help 입력 시, help text 콘솔에 표출
  libs.onHelpFlag();

  // 그 이외의 로직 처리 시작
  utils.consoleIntro();

  const rl = pakages.ReadlineControl.getReadlineInstance();

  rl.question('action : ', (input) => {
    const defaultParams = getDefaultParams({ input, rl });

    if (defaultParams.commands.flag) {
      // flag 같이 입력되었을 시 로직 처리
      libs.onHandleFlag(defaultParams);
    } else {
      // flag가 없을 경우의 로직 처리
      libs.onHandlePageComponent(defaultParams);
    }
  });
}

generateStructure();

/**
 * @helpers
 */

const getDefaultParams = ({ input, rl }: { input: string; rl?: readline.Interface }) => {
  const commands = utils.getCommands({ input, rl });

  const ASFGConfig = undefined; //todo config 파일 읽어오도록 수정
  const config: ASFGConfig = ASFGConfig ?? constants.defaultASFGConfig; //todo config 파일 읽어오도록 한다.

  const rootDir = utils.getRootDirectory() ?? process.cwd();

  return {
    commands,
    config,
    rootDir,
  } as DefaultParams;
};
