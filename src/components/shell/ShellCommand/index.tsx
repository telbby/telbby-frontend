import { ReactElement, createElement } from 'react';

import { ShellError } from '../constants';
import { ShellCommandType } from '../types';

type ShellCommandProps = ShellCommandType;

const ShellCommand = ({ ...props }: ShellCommandProps): ReactElement => {
  if (!props.sequence) throw new Error(ShellError.emptySequence);
  if (!props.nextSequence) throw new Error(ShellError.emptyNextSequence);
  if (!props.render) throw new Error(ShellError.emptyRenderFunc);

  return createElement(null, props);
};

export default ShellCommand;
