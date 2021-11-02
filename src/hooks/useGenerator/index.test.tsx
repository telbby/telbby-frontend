/* eslint-disable no-restricted-syntax */
import React from 'react';
import { act } from 'react-dom/test-utils';

import { renderHook } from '@testing-library/react-hooks';

import { FormElementType } from '@/components/Shell';
import ShellLine from '@/components/ShellLine';
import { SHELL_LOGIN_FORM_ELEMENT } from '@/constants/shell';

import useGenerator from './index';

describe('useGenerator', () => {
  it(`resetGenerator 함수를 호출할 경우,
  기존에 가지고 있던 generator를 종료시키고,
  새로운 generator를 state에 반영합니다.`, () => {
    const getFormElementShellLine = (props: FormElementType) => (
      <ShellLine
        lineType={props.lineType}
        lineTitle={props.lineTitle}
        inputType={props.inputType}
      />
    );

    function* formElementGenerator() {
      for (const props of SHELL_LOGIN_FORM_ELEMENT) {
        yield {
          line: getFormElementShellLine(props),
          checkValidation: props.checkValidation,
        };
      }
    }

    const {
      result: { current },
    } = renderHook(() => useGenerator(formElementGenerator()));

    const gen = current.generator;
    act(() => {
      current.resetGenerator();
    });
    expect(gen.next().done).toBe(true);
  });
});
