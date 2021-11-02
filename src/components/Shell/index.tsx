import React, { ReactElement, useEffect, useRef, useState } from 'react';

import {
  SHELL_ERROR_USER_ACCESS_DENIED,
  SHELL_SUCCESS_MESSAGE,
  SHELL_TITLE,
} from '@/constants/shell';
import useShellInputFocus from '@/hooks/useShellInputFocus';
import useShellLine from '@/hooks/useShellLine';

import { ShellLineProps } from '../ShellLine';
import * as S from './style';

export type FormElementType = ShellLineProps & {
  bodyKey?: string;
  checkValidation?: (value: string) => boolean;
};

type ShellComponentProps = {
  formElement: FormElementType[];
  subTitle?: string;
};

/**
 * Shell 형태의 Chat UI 컴포넌트 입니다.
 * Enter를 입력할 때마다 유효성을 검증하고, 다음 ShellLine을 가져옵니다.
 * form 에 클릭을 하면, 자동으로 마지막 Input에 포커스가 갑니다.
 */
const Shell = ({
  formElement,
  subTitle,
}: ShellComponentProps): ReactElement => {
  const [formValue, setFormValue] = useState({});
  const fieldsetRef = useRef<HTMLFieldSetElement>();
  const {
    shellLines,
    addFormElementLine,
    addErrorLine,
    addNormalLine,
    isGeneratorDone,
  } = useShellLine(formElement);
  const { setFocus } = useShellInputFocus(fieldsetRef, shellLines);

  const setNextLine = (e: React.KeyboardEvent<HTMLFieldSetElement>): void => {
    const target = e.target as HTMLInputElement;

    if (!isGeneratorDone && e.key === 'Enter') {
      const { id, value } = target;
      const elem = formElement.find(({ lineTitle }) => lineTitle === id);

      if (elem.checkValidation && !elem.checkValidation(value)) {
        addErrorLine(SHELL_ERROR_USER_ACCESS_DENIED);
        return;
      }
      addFormElementLine();

      if (elem.bodyKey) {
        setFormValue((prev) => ({ ...prev, [elem.bodyKey]: value }));
      }
    }
  };

  useEffect(() => {
    if (isGeneratorDone) {
      // TODO:
      // - 해당 부분에서 formValue와 함께 API 요청을 합니다.
      // 성공을 하면 addNormalLine, 실패시 addErrorLine을 호출하면 됩니다.
      console.log(formValue);
      addNormalLine(SHELL_SUCCESS_MESSAGE);
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
