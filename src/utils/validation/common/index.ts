export const REG_START_ENG = /^[a-zA-Z]/;

export const REG_ONLY_USE_ENG_AND_NUM = /^[a-zA-Z0-9]{0,}$/;

export const isStartWithEng = (s: string): boolean => REG_START_ENG.test(s);

export const isOnlyUseEngAndNumbers = (s: string): boolean =>
  REG_ONLY_USE_ENG_AND_NUM.test(s);
