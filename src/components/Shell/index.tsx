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
  requestWhenQuestionDone: (param: {
    [key: string]: string | number;
  }) => Promise<unknown>;
};

const Shell = ({ type, requestWhenQuestionDone }: ShellProps): ReactElement => {
  const FIRST_LINE: FormElementType = {
    type: 'default',
    content: `telbby init v0.1.0 - ${type.replace('-', ' ')}`,
  };
  const [lines, setLines] = useState<FormElementType[]>([FIRST_LINE]);
  const [formValue, setFormValue] = useState({});

  const [questionList, reset] = useGenerator(SHELL_FORM_ELEMENT[type]);
  const [isQuestionDone, setIsQuestionDone] = useState<boolean>(false);

  const fieldsetRef = useRef<HTMLFieldSetElement>();
  const setFocus = useCallback(() => {
    if (!fieldsetRef.current) return;

    const inputs = fieldsetRef.current.querySelectorAll('input');
    if (inputs.length === 0) return;
    inputs[inputs.length - 1].focus();
  }, []);

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

  const request = async (data: { [key: string]: string | number }) => {
    try {
      await requestWhenQuestionDone(data);
      addShellLine({ type: 'default', content: SHELL_SUCCESS_MESSAGE });
    } catch (error) {
      addShellLine({ type: 'error', content: error.message });
      setIsQuestionDone(false);
      reset();
    }
  };

  useEffect(() => setFocus, [lines]);
  useEffect(() => addShellLine(questionList.next().value), [questionList]);
  useEffect(() => {
    if (isQuestionDone) request(formValue);
  }, [isQuestionDone]);

  return (
    <div role="button" tabIndex={0} onKeyPress={handleEnter} onClick={setFocus}>
      <form css={S.formStyle}>
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
