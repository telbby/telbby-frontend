import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { SHELL_FORM_ELEMENT } from '@/constants/shell';

import Shell from '.';

describe('Shell Component', () => {
  it(`Shell Component는 처음 렌더링 시
    props에 전달되는 type에 해당하는 form element중 첫번재 요소를 렌더링합니다.
    그러나, 두번째 요소는 렌더링하지 않습니다.
  `, () => {
    const shellType = 'login';
    const { container } = render(<Shell type={shellType} />);
    const formElement = SHELL_FORM_ELEMENT[shellType];

    const { type: firstLineType, content: firstLineContent } = formElement[0];
    const { type: secondLineType, content: secondLineContent } = formElement[1];

    expect(container).toHaveTextContent(
      `${firstLineType} ${firstLineContent}:`,
    );
    expect(container).not.toHaveTextContent(
      `${secondLineType} ${secondLineContent}:`,
    );
  });
  it(`Shell Component에 Enter를 입력하면, 다음 요소를 렌더링합니다.`, () => {
    const shellType = 'login';
    const { container } = render(<Shell type={shellType} />);
    const formElement = SHELL_FORM_ELEMENT[shellType];
    const { type: secondLineType, content: secondLineContent } = formElement[1];

    expect(container).not.toHaveTextContent(
      `${secondLineType} ${secondLineContent}:`,
    );

    const inputs = screen.getAllByTestId('shell-line-input');
    const lastInputElement = inputs[inputs.length - 1];

    fireEvent.keyPress(lastInputElement, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });

    expect(container).toHaveTextContent(
      `${secondLineType} ${secondLineContent}:`,
    );
  });
});
