import {
  OnEnterErrorType,
  OnEnterSuccessType,
  ShellLineEssentialType,
} from './types';

export type RenderPropsType = (
  type: ShellLineEssentialType['type'],
  prefix: string,
  message: string,
) => ShellLineEssentialType;

export const renderProps: RenderPropsType = (type, prefix, message) => ({
  type,
  prefix,
  message,
});

export type ResolveType = (nextSequence: number) => OnEnterSuccessType;

export const resolve: ResolveType = (nextSequence) => ({
  status: 'success',
  nextSequence,
});

export type RejectType = (
  goBackSequence: number,
  errorMessage?: string,
) => OnEnterErrorType;

export const reject: RejectType = (goBackSequence, errorMessage) => ({
  status: 'error',
  nextSequence: goBackSequence,
  render: {
    type: 'printLine',
    prefix: 'error',
    message: errorMessage,
  },
});
