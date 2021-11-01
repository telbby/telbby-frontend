/* eslint-disable no-restricted-syntax */

// * FIXME:
// * generator 내에서 배열을 순회하며 yield 를 호출하는 구문이 있는데,
// * 이 때 linter error가 나와 잠시 에러를 해지하였습니다.
// * 리팩토링하며 수정될 가능성이 있습니다.

import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import ShellLine, { ShellLineProps } from '@/components/ShellLine';
import { SHELL_ERROR_ACCESS_DENIED } from '@/constants/shell';

import useGenerator from './useGenerator';

/**
 * form 요소들을 받아
 * shell line과 다음 shell을 호출할 수 있는 함수를 반환합니다.
 *
 * @returns
 * **shellLines**
 * - formElement에서 ShellLine Component로 변환된 배열값입니다.
 *
 * **setNextShellLine**
 * - 다음 ShellLine을 가져오는 함수입니다. telbby에서는 Enter를 입력하여 다음 ShellLine을 가져옵니다.
 */
const useShellLineControl = (
  formElement: ShellLineProps[],
): {
  shellLines: ReactElement[];
  setNextShellLine: (target: HTMLInputElement) => void;
} => {
  function* formElementGenerator() {
    for (const props of formElement) {
      yield {
        line: (
          <ShellLine
            key={Math.random()}
            lineType={props.lineType}
            lineTitle={props.lineTitle}
            inputType={props.inputType}
          />
        ),
        checkValidation: props.checkValidation,
      };
    }
  }

  const [shellLines, setShellLines] = useState<ReactElement[]>([]);
  const { generator, resetGenerator } = useGenerator(formElementGenerator());

  const addShellLine = useCallback(() => {
    const { value, done } = generator.next();

    if (!done && value) setShellLines((prev) => [...prev, value.line]);
  }, [generator]);

  const handleError = (message: string) => {
    setShellLines((prev) => [
      ...prev,
      <ShellLine key={Math.random()} lineType="ERROR" lineTitle={message} />,
    ]);
    resetGenerator();
  };

  /**
   * 다음 Shell Line을 세팅합니다.
   *
   * 만약, 검증문이 formElement에 있다면
   * input으로 입력한 value가 유효한지 확인합니다.
   *
   * 문제가 없을 시, 다음 Shell Line을 추가합니다.
   */
  const setNextShellLine = (target: HTMLInputElement) => {
    const { id, value } = target;
    const elem = formElement.find(({ lineTitle }) => lineTitle === id);

    if (elem.checkValidation && !elem.checkValidation(value))
      handleError(SHELL_ERROR_ACCESS_DENIED);

    addShellLine();
  };

  /**
   * generator가 state에 할당되면,
   * 처음 등록된 yield 를 호출하기 위해 generator.next()를 호출합니다.
   */
  useEffect(() => addShellLine(), [generator]);

  return { shellLines, setNextShellLine };
};

export default useShellLineControl;
