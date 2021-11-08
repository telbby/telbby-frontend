import { ShellLineProps } from '@/components/ShellLine';

export const SHELL_SUCCESS_MESSAGE =
  'Congrats! service has been added to telbby.';

export const SHELL_ERROR_USER_ACCESS_DENIED = 'Access denied';
export const MAX_SHELL_INPUT_LENGTH = 15;

export type FormElementType = ShellLineProps & {
  formKey?: string;
  validation?: (param?: unknown) => { isValid: boolean; message?: string };
};

export const SHELL_FORM_ELEMENT: Record<
  'login' | 'feedback',
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
  feedback: [
    { type: 'config', content: 'service name', formKey: 'name' },
    { type: 'config', content: 'service description', formKey: 'descriptions' },
    { type: 'config', content: 'service domain', formKey: 'domain' },
    { type: 'config', content: 'color theme', formKey: 'theme' },
    { type: 'config', content: 'first question', formKey: 'first-question' },
  ],
};
