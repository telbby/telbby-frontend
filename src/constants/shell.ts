export const SHELL_TITLE = 'telbby init v0.1.0';
export const SHELL_SUCCESS_MESSAGE =
  'Congrats! service has been added to telbby.';

export const SHELL_ERROR_USER_ACCESS_DENIED = 'Access denied';
export const MAX_SHELL_INPUT_LENGTH = 15;

export const SHELL_LOGIN_FORM_ELEMENT = [
  { lineType: 'question', lineTitle: 'username', bodyKey: 'username' },
  {
    lineType: 'question',
    lineTitle: 'password',
    inputType: 'password',
    bodyKey: 'password',
  },
  {
    lineType: 'question',
    lineTitle: 'Sign in? [y/n]',
    checkValidation: (val: string): boolean => {
      if (!['y', 'n'].includes(val)) return false;
      return true;
    },
  },
];

export const SHELL_FEEDBACK_FORM_ELEMENT = [
  { lineType: 'config', lineTitle: 'service name', bodyKey: 'name' },
  {
    lineType: 'config',
    lineTitle: 'service description',
    bodyKey: 'description',
  },
  { lineType: 'config', lineTitle: 'service domain', bodyKey: 'domain' },
  { lineType: 'config', lineTitle: 'color theme', bodyKey: 'color-theme' },
  {
    lineType: 'config',
    lineTitle: 'first question',
    bodyKey: 'first-question',
  },
];
