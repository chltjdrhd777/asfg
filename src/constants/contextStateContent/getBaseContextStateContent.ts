export const getBaseContextStateContent = (pageName: string) => `
import * as React from 'react';

/**
 * @description context State 설명
 */
export default function use${pageName}ContextState() {
  const [state, setState] = React.useState();

  return { state, setState };
}
`;
