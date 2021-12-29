import {
  OnEnterErrorType,
  OnEnterSuccessType,
  ShellLineEssentialType,
} from './types';

type RenderPropsType = (
  type: ShellLineEssentialType['type'],
  prefix: string,
  message: string,
) => ShellLineEssentialType;

const renderProps: RenderPropsType = (type, prefix, message) => ({
  type,
  prefix,
  message,
});

type ResolveType = (nextSequence?: number) => OnEnterSuccessType;

const resolve: ResolveType = (nextSequence) => ({
  status: 'success',
  nextSequence,
});

type RejectType = (
  goBackSequence: number,
  errorMessage?: string,
) => OnEnterErrorType;

const reject: RejectType = (goBackSequence, errorMessage) => ({
  status: 'error',
  nextSequence: goBackSequence,
  render: {
    type: 'printLine',
    prefix: 'error',
    message: errorMessage,
  },
});

export { renderProps, resolve, reject };
