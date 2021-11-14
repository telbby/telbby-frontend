import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  SHELL_FIRST_LINE_PREFIX,
  SHELL_FORM_ELEMENT,
  SHELL_SUCCESS_MESSAGE,
} from '@/constants/shell';
import useGenerator from '@/hooks/useGenerator';

import ShellLine, { ShellLineProps, ShellLineType } from '../ShellLine';
import * as S from './style';

export type FormElementType = ShellLineProps & {
  formKey?: string;
  validation?: (param?: unknown) => { isValid: boolean; message?: string };
};

type Props = {
  type: keyof typeof SHELL_FORM_ELEMENT;
  requestWhenQuestionDone: (param: {
    [key: string]: string | number;
  }) => Promise<unknown>;
};

const Shell = ({ type, requestWhenQuestionDone }: Props): ReactElement => {
  const FIRST_LINE: FormElementType = {
    type: ShellLineType.Default,
    content: `${SHELL_FIRST_LINE_PREFIX} - ${type.replace('-', ' ')}`,
  };
  const [lines, setLines] = useState<readonly FormElementType[]>([FIRST_LINE]);
  const [formValue, setFormValue] = useState({});

  const [questionList, reset] = useGenerator(SHELL_FORM_ELEMENT[type]);
  const [isQuestionDone, setIsQuestionDone] = useState<boolean>(false);

  const fieldsetRef = useRef<HTMLFieldSetElement>();
  const setFocusOnLastLine = useCallback(() => {
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
    if (done) return setIsQuestionDone(true);

    return value;
  };

  const addShellLine = (props: ShellLineProps) => {
    setLines((prev) => [...prev, props]);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;
    if (isQuestionDone) return;

    const currentQuestion = lines[lines.length - 1];
    const target = e.target as HTMLInputElement;
    const inputValue = target.value;
    let nextProps: FormElementType;

    const { isValid, message } = checkValidation(currentQuestion, inputValue);

    if (isValid) {
      nextProps = getNextLineProps();
      addFormValue(currentQuestion, inputValue);
    } else {
      nextProps = { type: ShellLineType.Error, content: message };
      reset();
    }

    if (nextProps) addShellLine(nextProps);
  };

  const request = async (data: { [key: string]: string | number }) => {
    try {
      await requestWhenQuestionDone(data);
      addShellLine({
        type: ShellLineType.Default,
        content: SHELL_SUCCESS_MESSAGE,
      });
    } catch (error) {
      addShellLine({ type: ShellLineType.Error, content: error.message });
      setIsQuestionDone(false);
      reset();
    }
  };

  useEffect(() => setFocusOnLastLine, [lines]);
  useEffect(() => addShellLine(questionList.next().value), [questionList]);
  useEffect(() => {
    if (isQuestionDone) request(formValue);
  }, [isQuestionDone]);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyPress={handleEnter}
      onClick={setFocusOnLastLine}
    >
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
