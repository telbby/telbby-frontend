import React, { ReactElement, useEffect, useRef } from 'react';

import { SHELL_ERROR_ACCESS_DENIED, SHELL_TITLE } from '@/constants/shell';
import useShellInputFocus from '@/hooks/useShellInputFocus';
import useShellLine from '@/hooks/useShellLine';

import { ShellLineProps } from '../ShellLine';
import * as S from './style';

export type FormElementType = ShellLineProps & {
  bodyKey: string;
  checkValidation?: (value: string) => boolean;
};

type ShellProps = {
  formElement: FormElementType[];
  subTitle?: string;
};

/**
 * Shell 형태의 Chat UI 컴포넌트 입니다.
 * Enter를 입력할 때마다 유효성을 검증하고, 다음 ShellLine을 가져옵니다.
 * form 에 클릭을 하면, 자동으로 마지막 Input에 포커스가 갑니다.
 */
const Shell = ({ formElement, subTitle }: ShellProps): ReactElement => {
  const fieldsetRef = useRef<HTMLFieldSetElement>();
  const { shellLines, addFormElementLine, addErrorLine, isGeneratorDone } =
    useShellLine(formElement);
  const { setFocus } = useShellInputFocus(fieldsetRef, shellLines);

  const setNextLine = (e: React.KeyboardEvent<HTMLFieldSetElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.key === 'Enter') {
      const { id, value } = target;
      const elem = formElement.find(({ lineTitle }) => lineTitle === id);

      if (elem.checkValidation && !elem.checkValidation(value))
        addErrorLine(SHELL_ERROR_ACCESS_DENIED);

      addFormElementLine();
    }
  };

  useEffect(() => {
    // if (isGeneratorDone) addNormalLine(SHELL_SUCCESS_MESSAGE);
    if (isGeneratorDone) {
      addErrorLine(SHELL_ERROR_ACCESS_DENIED);
    }
  }, [isGeneratorDone]);

  return (
    <form
      aria-hidden
      onSubmit={(e) => e.preventDefault()}
      onClick={setFocus}
      css={S.formStyle}
    >
      <h1>
        {SHELL_TITLE}
        {subTitle && ` - ${subTitle}`}
      </h1>
      <fieldset
        aria-hidden
        onKeyDown={setNextLine}
        ref={fieldsetRef}
        css={S.fieldsetStyle}
      >
        <legend>Telbby Service Shell: </legend>
        {shellLines}
      </fieldset>
    </form>
  );
};

Shell.defaultProps = {
  subTitle: '',
};

export default Shell;
