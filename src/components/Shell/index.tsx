import React, { ReactElement, useRef } from 'react';

import { SHELL_SUCCESS_MESSAGE, SHELL_TITLE } from '@/constants/shell';
import useShellInputFocus from '@/hooks/useShellInputFocus';
import useShellLineControl from '@/hooks/useShellLineControl';

import * as S from './style';

type ShellProps = {
  formElement: { type: string; title: string }[];
  subTitle?: string;
};

/**
 * Shell 형태의 Chat UI 컴포넌트 입니다.
 *
 * Enter를 입력할 때마다 유효성을 검증하고, 다음 ShellLine을 가져옵니다.
 *
 * form 에 클릭을 하면, 자동으로 마지막 Input에 포커스가 갑니다.
 */
const Shell = ({ formElement, subTitle }: ShellProps): ReactElement => {
  const fieldsetRef = useRef<HTMLFieldSetElement>();
  const { shellLines, setNextShellLine } = useShellLineControl(formElement);
  const { handleFocus } = useShellInputFocus(fieldsetRef, shellLines);

  const checkFormValueValidation = (
    e: React.KeyboardEvent<HTMLFieldSetElement>,
  ) => {
    if (e.key === 'Enter') {
      setNextShellLine();
    }
  };

  return (
    <form
      aria-hidden
      onClick={handleFocus}
      onSubmit={(e) => e.preventDefault()}
      css={S.formStyle}
    >
      <h1>
        {SHELL_TITLE}
        {subTitle && ` - ${subTitle}`}
      </h1>
      <fieldset
        aria-hidden
        onKeyDown={checkFormValueValidation}
        ref={fieldsetRef}
        css={S.fieldsetStyle}
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
