import { guideText } from '../../constants/guideText';

export const hFlag = () => {
  const argvs = process.argv.slice(2);

  if (argvs.includes('-h') || argvs.includes('-help')) {
    console.table(guideText.helpTableStructure);
    process.exit();
  }
};
