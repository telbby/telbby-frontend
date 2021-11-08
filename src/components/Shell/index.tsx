import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  FormElementType,
  SHELL_FORM_ELEMENT,
  SHELL_LOADING,
  SHELL_SUCCESS_MESSAGE,
} from '@/constants/shell';
import useGenerator from '@/hooks/useGenerator';

import ShellLine, { ShellLineProps } from '../ShellLine';
import * as S from './style';

type ShellProps = {
  type: keyof typeof SHELL_FORM_ELEMENT;
};

const Shell = ({ type }: ShellProps): ReactElement => {
  const fieldsetRef = useRef<HTMLFieldSetElement>();
  const FIRST_LINE: FormElementType = {
    type: 'default',
    content: `telbby init v0.1.0 - ${type.replace('-', ' ')}`,
  };
  const [lines, setLines] = useState<FormElementType[]>([FIRST_LINE]);
  const [formValue, setFormValue] = useState({});

  const [questionList, reset] = useGenerator(SHELL_FORM_ELEMENT[type]);
  const [isQuestionDone, setIsQuestionDone] = useState<boolean>(false);

  const checkValidation = (question: FormElementType, value: string) => {
    if (!question.validation) return { isValid: true };

    return { ...question.validation(value) };
  };

  const addFormValue = (question: FormElementType, value: string) => {
    if (!question.formKey) return;

    setFormValue((prev) => ({ ...prev, [question.formKey]: value }));
  };

  const getNextLineProps = () => {
    const { done, value } = questionList.next();
    if (done) {
      setIsQuestionDone(true);
      return { type: 'default', content: SHELL_LOADING };
    }

    return value;
  };

  const addShellLine = (props: ShellLineProps) => {
    setLines((prev) => [...prev, props]);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isQuestionDone && e.key === 'Enter') {
      const currentQuestion = lines[lines.length - 1];
      const target = e.target as HTMLInputElement;
      const inputValue = target.value;
      let nextProps: FormElementType;

      const { isValid, message } = checkValidation(currentQuestion, inputValue);

      if (isValid) {
        nextProps = getNextLineProps();
        addFormValue(currentQuestion, inputValue);
      } else {
        nextProps = { type: 'error', content: message };
        reset();
      }

      addShellLine(nextProps);
    }
  };

  const setFocus = useCallback(() => {
    if (!fieldsetRef.current) return;

    const inputs = fieldsetRef.current.querySelectorAll('input');
    if (inputs.length === 0) return;
    inputs[inputs.length - 1].focus();
  }, []);

  useEffect(() => addShellLine(questionList.next().value), [questionList]);
  useEffect(() => setFocus, [lines]);

  // TODO: 해당 부분에서 formValue와 함께 API 요청을 합니다.
  useEffect(() => {
    if (isQuestionDone) {
      // eslint-disable-next-line no-console
      console.log(formValue);
      setTimeout(() => {
        addShellLine({ type: 'default', content: SHELL_SUCCESS_MESSAGE });
      }, 1000);
    }
  }, [isQuestionDone]);

  return (
    <div role="button" tabIndex={0} onKeyPress={handleEnter} onClick={setFocus}>
      <form css={S.formStyle} onSubmit={(e) => e.preventDefault()}>
        <fieldset ref={fieldsetRef} css={S.fieldsetStyle}>
          <legend>Telbby Service Shell: </legend>
          {lines.map(({ type: lineType, content, disabled }, index) => (
            <ShellLine
              // eslint-disable-next-line react/no-array-index-key
              key={`${index}lineType`}
              type={lineType}
              content={content}
              disabled={disabled}
            />
          ))}
        </fieldset>
      </form>
    </div>
  );
};

export default Shell;
