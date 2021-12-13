export const signupError = {
  409: 'User already exists',
};

export const loginError = {
  401: 'Please check your ID or password again.',
};

export const NETWORK_ERROR =
  'Network Error: There is a problem communicating with the server.';

export const UNEXPECTED_ERROR =
  'Unexpected Error: An unexpected error occurred.';

export const shellError = {
  emptySequence: 'ShellCommand have to get `sequence` prop.',
  emptyNextSequence: 'ShellCommand have to get `nextSequence` prop.',
  emptyRenderFunc: 'ShellCommand have to get `render` function prop.',
};
