import { FormElementType } from '@/components/Shell';
import { ShellLineType } from '@/components/ShellLine';
import { idValidator, pwValidator } from '@/utils/validation';

export const SHELL_SUCCESS_MESSAGE =
  'Congrats! service has been added to telbby.';

export const SHELL_FIRST_LINE_PREFIX = 'telbby init v0.1.0';
export const SHELL_ERROR_USER_ACCESS_DENIED = 'Access denied';
export const SHELL_ERROR_USER_SIGNUP_DENIED = 'Signup denied';

const userIdValidation: FormElementType['validation'] = (val) => {
  const [isValid, message] = idValidator(val);
  if (!isValid) return { isValid, message };

  return { isValid: true };
};

const passwordValidation: FormElementType['validation'] = (val) => {
  const [isValid, message] = pwValidator(val);
  if (!isValid) return { isValid, message };

  return { isValid: true };
};

const yesOrNoValidation: FormElementType['validation'] = (val, message) => {
  if (val !== 'y') return { isValid: false, message };

  return { isValid: true };
};

export const SHELL_FORM_ELEMENT: Record<
  'signin' | 'signup' | 'services' | 'service-settings',
  FormElementType[]
> = {
  signin: [
    {
      type: ShellLineType.Question,
      message: 'username',
      formKey: 'userId',
      validation: userIdValidation,
    },
    {
      type: ShellLineType.Question,
      message: 'password',
      formKey: 'password',
      validation: passwordValidation,
    },
    {
      type: ShellLineType.Question,
      message: 'Sign in? [y/n]',
      validation: (val) =>
        yesOrNoValidation(val, SHELL_ERROR_USER_ACCESS_DENIED),
    },
  ],
  signup: [
    {
      type: ShellLineType.Question,
      message: 'username',
      formKey: 'userId',
      validation: userIdValidation,
    },
    {
      type: ShellLineType.Question,
      message: 'password',
      formKey: 'password',
      validation: passwordValidation,
    },
    {
      type: ShellLineType.Question,
      message: 'Would you like to join? [y/n]',
      validation: (val) =>
        yesOrNoValidation(val, SHELL_ERROR_USER_SIGNUP_DENIED),
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
