import * as fs from 'fs';
import * as path from 'path';

export const isResourceExist = (pathGroup: string[] = []) => {
  const resourcePath = path.join(...pathGroup);

  return {
    resourcePath,
    isExist: fs.existsSync(resourcePath),
  };
};
