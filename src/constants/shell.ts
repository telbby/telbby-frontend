import { FormElementType } from '@/components/Shell';

export const SHELL_SUCCESS_MESSAGE =
  'Congrats! service has been added to telbby.';

export const SHELL_ERROR_USER_ACCESS_DENIED = 'Access denied';
export const SHELL_ERROR_USER_SIGNUP_DENIED = 'Signup denied';
export const MAX_SHELL_INPUT_LENGTH = 15;

export const SHELL_FORM_ELEMENT: Record<
  'login' | 'signup' | 'services' | 'service-settings',
  FormElementType[]
> = {
  login: [
    { type: 'question', content: 'username', formKey: 'username' },
    { type: 'question', content: 'password', formKey: 'password' },
    {
      type: 'question',
      content: 'Sign in? [y/n]',
      validation: (val: string): ReturnType<FormElementType['validation']> => {
        if (!['y', 'n'].includes(val)) {
          return { isValid: false, message: SHELL_ERROR_USER_ACCESS_DENIED };
        }

        return { isValid: true };
      },
    },
  ],
  signup: [
    { type: 'question', content: 'username', formKey: 'username' },
    { type: 'question', content: 'password', formKey: 'password' },
    {
      type: 'question',
      content: 'Would you like to join? [y/n]',
      validation: (val: string): ReturnType<FormElementType['validation']> => {
        if (!['y', 'n'].includes(val)) {
          return { isValid: false, message: SHELL_ERROR_USER_SIGNUP_DENIED };
        }

        return { isValid: true };
      },
    },
  ],
  services: [
    { type: 'question', content: 'service name', formKey: 'name' },
    { type: 'question', content: 'service domain', formKey: 'domain' },
  ],
  'service-settings': [
    { type: 'config', content: 'service name', formKey: 'name' },
    { type: 'config', content: 'service description', formKey: 'descriptions' },
    { type: 'config', content: 'service domain', formKey: 'domain' },
    { type: 'config', content: 'color theme', formKey: 'theme' },
    { type: 'config', content: 'first question', formKey: 'first-question' },
  ],
};
