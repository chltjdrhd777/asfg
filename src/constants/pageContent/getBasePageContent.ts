export const getBasePageContent = (pageName: string) => `
import ${pageName} from '@/components/${pageName}';

/**
 * @description 페이지 설명
 */
export default function ${pageName}Page() {
  return <${pageName} />;
}
`;
