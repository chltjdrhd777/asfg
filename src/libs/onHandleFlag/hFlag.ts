import readline from 'readline';

import { guideText } from '../../constants/guideText';

export const hFlag = () => {
  console.log(guideText.help);

  return process.exit();
};
