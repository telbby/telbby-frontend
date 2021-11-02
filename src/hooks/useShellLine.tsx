/* eslint-disable no-restricted-syntax */

// * FIXME:
// * generator 내에서 배열을 순회하며 yield 를 호출하는 구문이 있는데,
// * 이 때 linter error가 나와 잠시 에러를 해지하였습니다.
// * 리팩토링하며 수정될 가능성이 있습니다.

import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import { FormElementType } from '@/components/Shell';
import ShellLine from '@/components/ShellLine';

import useGenerator from './useGenerator';

/**
 * form 요소들을 받아
 * shell line과 다음 shell을 호출할 수 있는 함수를 반환합니다.
 *
 * @returns
 * shellLines
 * - formElement에서 ShellLine Component로 변환된 배열값입니다.
 *
 * addFormElementLine
 * - 다음 ShellLine Element를 가져옵니다.
 *
 * addErrorLine
 * - 에러가 발생했을 경우, 에러 메시지와 함께 ShellLine Generator를 reset 합니다.
 */
const useShellLine = (
  formElement: FormElementType[],
): {
  shellLines: ReactElement[];
  addFormElementLine: () => void;
  addErrorLine: (message: string) => void;
  addNormalLine: (message: string) => void;
  isGeneratorDone: boolean;
} => {
  const getFormElementShellLine = (props: FormElementType) => (
    <ShellLine
      key={Math.random()}
      lineType={props.lineType}
      lineTitle={props.lineTitle}
      inputType={props.inputType}
    />
  );

  const getErrorShellLine = (message: string) => (
    <ShellLine key={Math.random()} lineType="ERROR" lineTitle={message} />
  );

  const getNormalShellLine = (message: string) => (
    <ShellLine key={Math.random()} lineType="NORMAL" lineTitle={message} />
  );

  /**
   * formElement를 순회하며 generator에
   * 변환된 ShellLine과 validation 검증 함수를 yield 합니다.
   */
  function* formElementGenerator() {
    for (const props of formElement) {
      yield {
        line: getFormElementShellLine(props),
        checkValidation: props.checkValidation,
      };
    }
  }

  const [shellLines, setShellLines] = useState<ReactElement[]>([]);
  const { generator, resetGenerator } = useGenerator(formElementGenerator());
  const [isGeneratorDone, setIsGeneratorDone] = useState<boolean>(false);

  const addFormElementLine = useCallback(() => {
    const { value, done } = generator.next();
    if (!done && value) {
      setShellLines((prev) => [...prev, value.line]);
    } else if (done) {
      setIsGeneratorDone(true);
    }
  }, [generator]);

  const addErrorLine = (message: string) => {
    setShellLines((prev) => [...prev, getErrorShellLine(message)]);
    setIsGeneratorDone(false);
    resetGenerator();
  };

  const addNormalLine = (message: string) => {
    setShellLines((prev) => [...prev, getNormalShellLine(message)]);
  };

  /**
   * generator가 state에 할당되면,
   * 처음 등록된 yield 를 호출하기 위해 generator.next()를 호출합니다.
   */
  useEffect(() => addFormElementLine(), [generator]);

  return {
    shellLines,
    addFormElementLine,
    addErrorLine,
    addNormalLine,
    isGeneratorDone,
  };
};

export default useShellLine;
