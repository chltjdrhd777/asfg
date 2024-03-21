import { CommonFlagHandlerParams } from '.';
import { generateExampleAPI } from './utils/generateExampleAPI';

interface ApiFlagParams extends CommonFlagHandlerParams {}

export const apiFlag = (ApiFlagParams: ApiFlagParams) => {
  generateExampleAPI(ApiFlagParams);
};
