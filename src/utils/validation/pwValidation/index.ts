import {
  USER_PW_MAX_LENGTH,
  USER_PW_MIN_LENGTH,
  WARNING_PW_COMBINATION,
  WARNING_PW_EMPTY,
  WARNING_PW_LENGTH,
} from '@/constants/validation';

const specialCharsForReg = '<>{}|;:.,~!?@#$%^=&*\\"\\\\/';

export const REG_PW_COMBINATION = new RegExp(
  [
    '^',
    `(?=.*[A-Z])(?=.*[a-z])|`,
    `(?=.*[A-Z])(?=.*[0-9])|`,
    `(?=.*[A-Z])(?=.*[${specialCharsForReg}])|`,
    `(?=.*[a-z])(?=.*[0-9])|`,
    `(?=.*[a-z])(?=.*[${specialCharsForReg}])|`,
    `(?=.*[0-9])(?=.*[${specialCharsForReg}])|`,
    '$',
  ].reduce((acc, cur) => acc + cur, ''),
);

export const isPwCombinationValid = (pw: string): boolean =>
  REG_PW_COMBINATION.test(pw);

export const isPwLengthValid = (pw: string): boolean =>
  pw.length >= USER_PW_MIN_LENGTH && pw.length <= USER_PW_MAX_LENGTH;

export const pwValidator = (pw: string): readonly [boolean, string] => {
  if (!pw.length) return [false, WARNING_PW_EMPTY];

  if (!isPwLengthValid(pw)) return [false, WARNING_PW_LENGTH];

  if (!isPwCombinationValid(pw)) return [false, WARNING_PW_COMBINATION];

  return [true, ''];
};

export const isPwValid = (pw: string): boolean => pwValidator(pw)[0];
