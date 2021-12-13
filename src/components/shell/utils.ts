export type RenderPropsType = (
  type: 'printLine' | 'readLine',
  prefix: string,
  message: string,
) => {
  type: typeof type;
  prefix: typeof prefix;
  message: typeof message;
};

export const renderProps: RenderPropsType = (type, prefix, message) => ({
  type,
  prefix,
  message,
});

export type ResolveType = (nextSequence: number) => {
  status: 'success';
  nextSequence: number;
};

export const resolve: ResolveType = (nextSequence) => ({
  status: 'success',
  nextSequence,
});

export type RejectType = (
  goBackSequence: number,
  errorMessage?: string,
) => {
  status: 'error';
  nextSequence: number;
  render: {
    type: 'printLine';
    prefix: 'error';
    message: string;
  };
};

export const reject: RejectType = (goBackSequence, errorMessage) => ({
  status: 'error',
  nextSequence: goBackSequence,
  render: {
    type: 'printLine',
    prefix: 'error',
    message: errorMessage,
  },
});
