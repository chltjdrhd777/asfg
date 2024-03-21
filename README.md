<div align="center"><strong>ASFG</strong></div>
<div align="center">Auto Structured Folder Generator</div>
<br />

<img src="https://raw.githubusercontent.com/chltjdrhd777/image-hosting/main/asfg.png" width="703px" height="305px" title="Github_Logo"/>

## ⭐ 제작 계기

Next.js 프로젝트를 진행 중에, Context API를 기반으로 하는 디자인 패턴을 공통 컨벤션으로 결정하였습니다. 하지만, 생각보다 컨벤션 절차가 존재가 많아서 Docs로 남겨두더라도 이를 따르면서 진행하기도 어렵고 인수인계 절차도 복잡하다는 생각을 하게 되었습니다. 때문에 일일이 문서를 통해 컨벤션을 확인하기 보다는 CLI 명령어로 자동적으로 구조를 생성해 주는 것이 간편하겠다고 판단하여 제작하게 되었습니다.
<br/>

> 기본적인 동작은 next.js의 app routing에 기반한 page, component 생성 로직을 기반으로 작동하며
> flag들을 통해서 추가적인 Folder Structure을 제작할 수 있습니다.
> 커스텀 flag를 통해서 config를 통한 Auto Folder Structure 기능을 제공합니다.(예정)

> package-manager : _**npm**_

## ⭐ Getting Started

> 설치 및 접속 방법 설명

`설치하지 않을 시`

```
> npx asfg
```

`npm 설치 시`

```
> npm i -g asfg
> asfg
```

## ⭐ Folder Structure (src 내부)

<table>
  <thead>
    <tr>
      <th>폴더명</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="color: #FFCA1A;">constants</td>
      <td>전역적으로 사용되는 고정 상수 폴더</td>
    </tr>
    <tr>
      <td style="color: #FFCA1A;">services</td>
      <td>프로젝트 공통으로 사용되는 특정 모듈 코드베이스 저장 폴더 </td>
    </tr>
    <tr>
      <td style="color: #FFCA1A;">types</td>
      <td>전역 타입 설정 폴더</td>
    </tr>
    <tr>
      <td style="color: #FFCA1A;">utils</td>
      <td>재사용 가능성 있는 독립적인 기능 함수들을 저장하는 폴더</td>
    </tr>
     <tr>
      <td style="color: #FFCA1A;">packages</td>
      <td>재사용 가능한 관심사들끼리 분리한 클래스의 저장 폴더</td>
    </tr>
  </tbody>
</table>

## Structure Convention

기본적인 default 생성 _(afsg로 생성하는 폴더구조)_ 의 모델이 된 컨벤션은 아래와 같습니다.

```js
<예를 들어, Building 페이지에 대한 Container를 생성할 경우>

< 1. context를 훅으로 분리 >

Container가 관리하는 context는 훅으로 분리하여 관리한다. (타입 정의 하드코딩 피하기 위함)
// 저장하는 위치는 contexts => 페이지명 폴더 => `use${페이지명}ContextState` 으로 생성한다.

// contexts/Building/useBuildingContextState.ts

import * as React from 'react';

export default function useBuildingContextState() {
  const [state1, setState1] = React.useState('value1');
  const [state2, setState2] = React.useState('value2');

  return {
    state1,
    setState1,
    state2,
    setState2,
  };
}

------------------------------------------------------------------------

< 2. context를 Provider로 전달 >

Container 컴포넌트에서 createContext를 이용해 필요한 context를 전파하는 구조를 작성한다.
// 컨테이너의 파일의 경우 상황에 따라 유연하게 변동될 수 있으므로 적절한 컨테이너 파일의 이름을 작성한다. (아래 예시는 index.tsx)

// 전파 구조에서 핵심 부분은 아래와 같다.
// a) export useContext
// b) Provider value

// components/Building/index.tsx

import * as React from 'react';

import { createContext } from '@/contexts';
import useBuildingContextState from '@/contexts/Building/useBuildingContextState';

import BuildingChildren from './BuildingChildren';

// a) useContext를 export 하여 자식이 context를 사용할 수 있게 한다.
export const { Provider: BuildingProvider, useContext: useBuildingContext } =
  createContext<ReturnType<typeof useBuildingContextState>>();

export default function Building() {
  return (
		// b) Provider을 통해서 value를 전달한다.
    <BuildingProvider value={useBuildingContextState()}>
      <BuildingChildren />
    </BuildingProvider>
  );
}


------------------------------------------------------------------------

< 3. viewer들이 전달받는 context를 이용해서 데이터를 표출하게 한다>

import * as React from 'react';
import { useBuildingContext } from '.';

export default function BuildingChildren() {
  const { state1, state2, setState1 } = useBuildingContext();

  const onClick = () => setState1('update state1');

  return (
    <section>
      <h1>{state1}</h1>
      <button onClick={onClick}>setState1</button>
    </section>
  );
}
```
