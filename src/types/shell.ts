export type PrintLineCommand = {
  type: 'printLine';
  prefix: 'error' | '';
  message: string;
  nextSequence: number | null;
};

export type ReadLineCommand = {
  type: 'readLine';
  prefix: 'question' | 'config';
  message: string;
  enterHandler: (
    inputValue?: string,
    /**
     * 서버에게 보내야 할 데이터가 있다면
     * 해당 인자에 formData 를 추가하여 요청합니다.
     */
    formData?: { [key: string]: string },
  ) => Promise<
    | {
        status: 'success';
        nextSequence: number | null;
      }
    | ({
        status: 'error';
      } & PrintLineCommand)
  >;
  /**
   * 만약, `readLine` 에서 읽은 값을
   * form 에 저장할 필요가 있는 경우
   * `formKey` 를 사용합니다.
   * form 객체에는 [formKey] : inputValue 의 형태로 값이 저장됩니다.
   */
  formKey?: string;
  defaultValue?: string;
  maxLength?: number;
};

/**
 * `ScriptCommand` 는 스크립트 내의 명령을 정의한 타입으로,
 * 반드시 `sequence` 가 필요합니다.
 */
export type ScriptCommand = (PrintLineCommand | ReadLineCommand) & {
  sequence: number;
};

/**
 * `ShellLine` 은 쉘의 줄을 정의한 타입으로,
 * `sequence` 는 필요하지 않지만 `id` 가 필요합니다.
 */
export type ShellLine = (PrintLineCommand | ReadLineCommand) & {
  id: string;
};
