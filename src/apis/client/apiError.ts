import { ApiResponse } from './types';

interface ApiErrorProps<D = unknown> {
  message: string;
  response: ApiResponse<D>;
}

class ApiError<D = unknown> extends Error {
  response: ApiResponse<D>;

  stacks?: string;

  constructor({ message, response }: ApiErrorProps<D>) {
    super(message);

    this.response = response;

    Error.captureStackTrace(this, this.constructor);

    this.stacks = this.stack;
  }
}

export default ApiError;
