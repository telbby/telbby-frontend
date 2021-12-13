import { ReactElement, createElement } from 'react';

import { shellError } from '@/constants/error';

import { ShellCommandType } from '../types';

type ShellCommandProps = ShellCommandType;

const ShellCommand = ({ ...props }: ShellCommandProps): ReactElement => {
  if (!props.sequence) throw new Error(shellError.emptySequence);
  if (!props.nextSequence) throw new Error(shellError.emptyNextSequence);
  if (!props.render) throw new Error(shellError.emptyRenderFunc);

  return createElement(null, props);
};

export default ShellCommand;
