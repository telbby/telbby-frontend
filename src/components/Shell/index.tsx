/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { ReactElement } from 'react';

import { SHELL_SUCCESS_MESSAGE, SHELL_TITLE } from '@/constants/shell';
import useShell from '@/hooks/useShell';

type ShellProps = {
  formElement: { type: string; title: string }[];
  subTitle?: string;
};

/**
 * Shell 형태의 Chat UI 컴포넌트 입니다.
 * form 리스트를 넘겨줘야 합니다.
 *
 * input 요소에 keyDown event를 넘겨줘야 하는데,
 * 이를 일일히 바인딩 하기보단 fieldset에 붙여줘 아래 요소에 전파되도록 하였습니다.
 * 이 때, noninteractive 요소에 interaction을 붙이면 안된다는 linter 에러가 있어 잠시 꺼두었습니다.
 * 추후에 리팩토링하며 수정할 계획이 있습니다.
 */
const Shell = ({ formElement, subTitle }: ShellProps): ReactElement => {
  const { shellLines, setNextShellLine } = useShell(formElement);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>
        {SHELL_TITLE}
        {subTitle && ` - ${subTitle}`}
      </h1>
      <fieldset
        onKeyDown={(e) => {
          if (e.key === 'Enter') setNextShellLine();
        }}
      >
        <legend>Telbby Service Terminal: </legend>
        {shellLines}
      </fieldset>
      <p>{SHELL_SUCCESS_MESSAGE}</p>
    </form>
  );
};

Shell.defaultProps = {
  subTitle: '',
};

export default Shell;
