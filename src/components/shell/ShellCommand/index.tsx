import { ReactElement, createElement } from 'react';

import { ShellError } from '../constants';
import { RejectType, RenderPropsType, ResolveType } from '../utils';

type ShellCommandProps = {
  sequence: number;
  nextSequence: number;
  render: ReturnType<RenderPropsType>;
  onEnter?: (
    input?: string,
    formData?: { [key: string]: string },
  ) => Promise<ReturnType<ResolveType> | ReturnType<RejectType>>;
  formKey?: string;
  defaultValue?: string;
  maxLength?: number;
};

const ShellCommand = ({ ...props }: ShellCommandProps): ReactElement => {
  if (!props.sequence) throw new Error(ShellError.emptySequence);
  if (!props.nextSequence) throw new Error(ShellError.emptyNextSequence);
  if (!props.render) throw new Error(ShellError.emptyRenderFunc);

  return createElement(null, props);
};

ShellCommand.defaultProps = {
  onEnter: () => {},
  formKey: '',
  defaultValue: '',
  maxLength: 0,
};

export default ShellCommand;
