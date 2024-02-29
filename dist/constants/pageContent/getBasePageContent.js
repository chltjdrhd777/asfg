"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBasePageContent = void 0;
const getBasePageContent = (pageName) => `
import ${pageName} from '@/components/${pageName}';

/**
 * @description 페이지 설명
 */
export default function ${pageName}() {
  return <${pageName} />;
}
`;
exports.getBasePageContent = getBasePageContent;
