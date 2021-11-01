/* eslint-disable no-restricted-syntax */

import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import ShellLine, { ShellLineProps } from '@/components/ShellLine';

/**
 * form 요소들을 받아
 * shell line과 다음 shell을 호출할 수 있는 함수를 반환합니다.
 *
 * FIXME:
 * generator 내에서 배열을 순회하며 yield 를 호출하는 구문이 있는데,
 * 이 때 linter error가 나와 잠시 에러를 해지하였습니다.
 * 리팩토링하며 수정될 가능성이 있습니다.
 *
 * @example
 * const formElement = [
 *  { lineType: 'question', lineTitle: 'username' },
 *  { lineType: 'question', lineTitle: 'password', inputType: 'password' },
 *  { lineType: 'question', lineTitle: 'sign in' },
 *  ];
 *
 * const { shellLines, setNextShellLine } = useShell(formElement);
 */
const useShellLineControl = (
  formElement: ShellLineProps[],
): {
  shellLines: ReactElement[];
  setNextShellLine: () => void;
} => {
  const [shellLines, setShellLines] = useState<ReactElement[]>([]);

  function* questionGenerator() {
    for (const props of formElement) {
      yield (
        <ShellLine
          key={props.lineTitle}
          lineType={props.lineType}
          lineTitle={props.lineTitle}
          inputType={props.inputType}
        />
      );
    }
  }

  const gen = questionGenerator();
  const setNextShellLine = useCallback(() => {
    const { value: line, done } = gen.next();
    if (!done && line) setShellLines((prev) => [...prev, line]);
  }, []);

  useEffect(() => setNextShellLine(), []);

  return { shellLines, setNextShellLine };
};

export default useShellLineControl;
