import { isOnlyUseEngAndNumbers, isStartWithEng } from '.';

describe('isStartWithEng() 함수 테스트', () => {
  it('영문자로 시작하면 참을 반환해야 합니다', () => {
    expect(isStartWithEng('a123')).toBe(true);
    expect(isStartWithEng('A123')).toBe(true);
  });
  it('그 외 문자로 시작하면 거짓을 반환해야 합니다', () => {
    expect(isStartWithEng('1abc')).toBe(false);
    expect(isStartWithEng('!@abc')).toBe(false);
  });
});

describe('isOnlyUseEngAndNumbers() 함수 테스트', () => {
  it('영문자와 숫자만 사용할 경우 참을 반환해야 합니다', () => {
    expect(isOnlyUseEngAndNumbers('a123')).toBe(true);
    expect(isOnlyUseEngAndNumbers('A123')).toBe(true);
    expect(isOnlyUseEngAndNumbers('abe134')).toBe(true);
  });
  it('그 외 문자를 포함하면 거짓을 반환해야 합니다', () => {
    expect(isOnlyUseEngAndNumbers('1abc@#')).toBe(false);
    expect(isOnlyUseEngAndNumbers('abc호호')).toBe(false);
    expect(isOnlyUseEngAndNumbers('abc!!')).toBe(false);
  });
});
