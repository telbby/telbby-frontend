export type ShellLineEssentialType = {
  type: 'printLine' | 'readLine';
  prefix: string;
  message: string;
};

export type OnEnterSuccessType = {
  status: 'success';
  nextSequence: number;
};

export type OnEnterErrorType = {
  status: 'error';
  nextSequence: number;
  render: {
    type: 'printLine';
    prefix: 'error';
    message: string;
  };
};

export type ShellCommandType = {
  render: ShellLineEssentialType;
  onEnter?: (
    input?: string,
    formData?: { [key: string]: string },
  ) =>
    | Promise<OnEnterErrorType | OnEnterSuccessType>
    | OnEnterErrorType
    | OnEnterSuccessType;
  formKey?: string;
  defaultValue?: string;
  maxLength?: number;
  nextSequence?: number;
};
