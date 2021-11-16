import { HTTPResponse } from './types';

interface HTTPErrorProps<D = unknown> {
  message: string;
  response: HTTPResponse<D>;
}

class HTTPError<D = unknown> extends Error {
  response: HTTPResponse<D>;

  stacks?: string;

  constructor({ message, response }: HTTPErrorProps<D>) {
    super(message);

    this.response = response;

    Error.captureStackTrace(this, this.constructor);

    this.stacks = this.stack;
  }
}

export default HTTPError;
