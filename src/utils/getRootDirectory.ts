import * as fs from 'fs';
import * as path from 'path';

export const getRootDirectory = () => {
  // node가 호출된 경로
  const cwd = process.cwd();

  // package.json 파일 경로
  const packageJsonPath = findPackageJson(cwd);

  // Next.js 프로젝트의 root 디렉토리
  const rootDirectory = path.dirname(packageJsonPath);

  return rootDirectory;
};

function findPackageJson(cwd: string) {
  const packageJsonPath = path.join(cwd, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    return packageJsonPath;
  } else {
    const parentDirectory = path.resolve(cwd, '..');

    if (parentDirectory === cwd) {
      console.debug('cannot find package.json');
      return parentDirectory;
    }

    return findPackageJson(parentDirectory);
  }
}
