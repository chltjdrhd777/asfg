export const getBaseComponentContent = (pageName: string, alias: string) => `'use client';

import * as React from 'react';

import { createContext } from '${alias}/contexts';
import use${pageName}ContextState from '${alias}/contexts/${pageName}/use${pageName}ContextState';

export const { Provider: ${pageName}Provider, useContext: use${pageName}Context } =
  createContext<ReturnType<typeof use${pageName}ContextState>>();

export default function ${pageName}() {
  return <${pageName}Provider value={use${pageName}ContextState()}>${pageName}</${pageName}Provider>;
}
`;
