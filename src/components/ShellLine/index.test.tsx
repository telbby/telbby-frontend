import React from 'react';

import { render, screen } from '@testing-library/react';

import {
  SHELL_ERROR_USER_ACCESS_DENIED,
  SHELL_SUCCESS_MESSAGE,
} from '@/constants/shell';

import ShellLine from './index';

describe('ShellLine Component', () => {
  it(`FormElement ShellLine은
    props로 전달받은 lineType, lineTitle 을 text content로,
    inputType을 input type 속성으로 갖게 됩니다.
  `, () => {
    const props = {
      lineType: 'question',
      lineTitle: 'password',
      inputType: 'password',
    };

    const { container } = render(
      <ShellLine
        lineType={props.lineType}
        lineTitle={props.lineTitle}
        inputType={props.inputType}
      />,
    );

    expect(container).toHaveTextContent('question password:');
    expect(screen.getByTestId('shell-line-input')).toHaveAttribute(
      'type',
      'password',
    );
  });
  it(`Error ShellLine 은 ERROR 와 함께 error message를 출력합니다.`, () => {
    const props = {
      lineType: 'ERROR',
      lineTitle: SHELL_ERROR_USER_ACCESS_DENIED,
    };

    const { container } = render(
      <ShellLine lineType={props.lineType} lineTitle={props.lineTitle} />,
    );

    expect(container).toHaveTextContent(
      `ERROR: ${SHELL_ERROR_USER_ACCESS_DENIED}`,
    );
  });
  it(`NORMAL ShellLin message와 maxLength가 0인 input을 렌더링합니다.`, () => {
    const props = {
      lineType: 'NORMAL',
      lineTitle: SHELL_SUCCESS_MESSAGE,
    };

    const { container } = render(
      <ShellLine lineType={props.lineType} lineTitle={props.lineTitle} />,
    );

    expect(container).toHaveTextContent(`${SHELL_SUCCESS_MESSAGE}`);
    expect(container).not.toContain(screen.getByTestId('shell-line-input'));
    expect(screen.getByTestId('shell-line-input')).toHaveAttribute(
      'maxLength',
      '0',
    );
  });
});
