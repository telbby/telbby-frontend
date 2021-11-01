/* eslint-disable no-restricted-syntax */
/*
 * FIXME:
 * generator 내에서 배열을 순회하며 yield 를 호출하는 구문이 있는데,
 * 이 때 linter error가 나와 잠시 에러를 해지하였습니다.
 * 리팩토링하며 수정될 가능성이 있습니다.
 */

import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import ShellLine from '@/components/ShellLine';

type UseShellParams = { type: string; title: string }[];
type UseShellReturnType = {
  shellLines: ReactElement[];
  setNextShellLine: () => void;
};

/**
 * form 요소들을 받아
 * shell line과 다음 shell을 호출할 수 있는 함수를 반환합니다.
 *
 * @usage
 * const formElement = [
 *  { type: 'question', title: 'username' },
 *  { type: 'question', title: 'password' },
 *  { type: 'question', title: 'sign in' },
 *  ];
 *
 * const { shellLines, setNextShellLine } = useShell(formElement);
 */
const useShell = (formElement: UseShellParams): UseShellReturnType => {
  const [shellLines, setShellLines] = useState<ReactElement[]>([]);

  function* questionGenerator() {
    for (const { type, title } of formElement) {
      yield <ShellLine key={title} type={type} title={title} />;
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

export default useShell;
