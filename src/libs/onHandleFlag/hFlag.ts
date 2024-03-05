import { guideText } from '../../constants/guideText';
import { HelpFlg } from '../../types';

export const hFlag = (helpFlag?: HelpFlg) => {
  const argvs = process.argv.slice(2);

  if (!!helpFlag || argvs.includes('-h') || argvs.includes('-help')) {
    console.table(guideText.helpTableStructure);
    process.exit();
  }
};
