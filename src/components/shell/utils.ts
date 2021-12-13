import { Line } from './types';

type RenderPropsType = (
  type: Line['type'],
  prefix: Line['prefix'],
  message: Line['message'],
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
