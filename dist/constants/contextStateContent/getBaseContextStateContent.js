"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseContextStateContent = void 0;
const getBaseContextStateContent = (pageName) => `
import * as React from 'react';

/**
 * @description context State 설명
 */
export default function use${pageName}ContextState() {
  const [state, setState] = React.useState();

  return { state, setState };
}
`;
exports.getBaseContextStateContent = getBaseContextStateContent;
