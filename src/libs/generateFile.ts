import * as fs from 'fs';

export const generateFile = (filePath: string, content: string) => {
  //경로에 파일이 없을 경우에 파일 생성
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  } else {
    console.log(`already exist ${filePath}`);
  }
};
