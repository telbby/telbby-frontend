import { FormElementType } from '@/components/Shell';
import { ShellLineType } from '@/components/ShellLine';

export const SHELL_SUCCESS_MESSAGE =
  'Congrats! service has been added to telbby.';

export const SHELL_FIRST_LINE_PREFIX = 'telbby init v0.1.0';
export const SHELL_ERROR_USER_ACCESS_DENIED = 'Access denied';
export const SHELL_ERROR_USER_SIGNUP_DENIED = 'Signup denied';
export const MAX_SHELL_INPUT_LENGTH = 15;

export const SHELL_FORM_ELEMENT: Record<
  'login' | 'signup' | 'services' | 'service-settings',
  FormElementType[]
> = {
  login: [
    { type: ShellLineType.Question, message: 'username', formKey: 'userId' },
    { type: ShellLineType.Question, message: 'password', formKey: 'password' },
    {
      type: ShellLineType.Question,
      message: 'Sign in? [y/n]',
      validation: (val: string): ReturnType<FormElementType['validation']> => {
        if (!['y', 'n'].includes(val)) {
          return { isValid: false, message: SHELL_ERROR_USER_ACCESS_DENIED };
        }

        return { isValid: true };
      },
    },
  ],
  signup: [
    { type: ShellLineType.Question, message: 'username', formKey: 'userId' },
    { type: ShellLineType.Question, message: 'password', formKey: 'password' },
    {
      type: ShellLineType.Question,
      message: 'Would you like to join? [y/n]',
      validation: (val: string): ReturnType<FormElementType['validation']> => {
        if (!['y', 'n'].includes(val)) {
          return { isValid: false, message: SHELL_ERROR_USER_SIGNUP_DENIED };
        }

        return { isValid: true };
      },
    },
  ],
  services: [
    { type: ShellLineType.Question, message: 'service name', formKey: 'name' },
    {
      type: ShellLineType.Question,
      message: 'service domain',
      formKey: 'domain',
    },
  ],
  'service-settings': [
    { type: ShellLineType.Config, message: 'service name', formKey: 'name' },
    {
      type: ShellLineType.Config,
      message: 'service description',
      formKey: 'descriptions',
    },
    {
      type: ShellLineType.Config,
      message: 'service domain',
      formKey: 'domain',
    },
    { type: ShellLineType.Config, message: 'color theme', formKey: 'theme' },
    {
      type: ShellLineType.Config,
      message: 'first question',
      formKey: 'first-question',
    },
  ],
};
