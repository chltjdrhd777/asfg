import * as fs from 'fs';
import { mkdirp } from 'mkdirp';

export const generateFolder = (path: string) => {
  //경로에 폴더가 없을 경우에 폴더 생성
  if (!fs.existsSync(path)) {
    mkdirp.sync(path);
  }
};
