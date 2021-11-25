import { isPwValid, pwValidator } from '.';

const WARNING_PW_EMPTY = 'Please enter your password';
const WARNING_PW_LENGTH = '`The password must be 10 ~ 35 characters long';

describe('pwValidator() 함수 테스트', () => {
  it('공백문자열은 거짓과 해당하는 경고 문자열을 반환해야 합니다.', () => {
    const result = pwValidator('');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_EMPTY);
  });
  it('10자보다 길이가 짧을 경우 거짓과 해당하는 경고 문자열을 반환해야 합니다.', () => {
    const result = pwValidator('1');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_LENGTH);
  });
  it('35자보다 길이가 길 경우 거짓과 해당하는 경고 문자열을 반환해야 합니다.', () => {
    const MAX_LENGTH = 35;
    const result = pwValidator('1'.repeat(MAX_LENGTH + 1));
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_LENGTH);
  });
  it('10 ~ 35자 사이의 영대문자 + 영소문자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('ABCabcABCa');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 영대문자 + 숫자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('ABC123ABC123');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 영대문자 + 특수문자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('ABC!@$ABC!@$');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 영소문자 + 숫자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('abc123abc123');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 영소문자 + 특수문자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('abc!@$abc!@$');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 숫자 + 특수문자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('123!@$123!@$');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
});

describe('isPwValid() 함수 테스트', () => {
  it(`공백문자열은 거짓을 반환해야 합니다.`, () => {
    expect(isPwValid('')).toBe(false);
  });
  it(`10자보다 길이가 짧을 경우 거짓을 반환해야 합니다.`, () => {
    expect(isPwValid('1')).toBe(false);
  });
  it(`35자보다 길이가 길 경우 거짓을 반환해야 합니다.`, () => {
    const MAX_LENGTH = 35;
    expect(isPwValid('1'.repeat(MAX_LENGTH + 1))).toBe(false);
  });
  it('10 ~ 35자 사이의 영대문자 + 영소문자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('ABCabcABCa')).toBe(true);
    expect(isPwValid('abAbabABab')).toBe(true);
    expect(isPwValid('aaaBBBaaaB')).toBe(true);
  });
  it('10 ~ 35자 사이의 영대문자 + 숫자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('ABC123ABC123')).toBe(true);
    expect(isPwValid('AB12AB12ABB')).toBe(true);
    expect(isPwValid('BBB111BBB111')).toBe(true);
  });
  it('10 ~ 35자 사이의 영대문자 + 특수문자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('ABC!@$ABC!@$')).toBe(true);
    expect(isPwValid('AB!@AB!@AB!')).toBe(true);
    expect(isPwValid('BBB!@$BBB!@$')).toBe(true);
  });
  it('10 ~ 35자 사이의 영소문자 + 숫자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('abc123abc123')).toBe(true);
    expect(isPwValid('ab12ab12abb')).toBe(true);
    expect(isPwValid('bbb111bbb111')).toBe(true);
  });
  it('10 ~ 35자 사이의 영소문자 + 특수문자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('abc!@$abc!@$')).toBe(true);
    expect(isPwValid('ab!@ab!@ab!')).toBe(true);
    expect(isPwValid('bbb!@$bbb!@$')).toBe(true);
  });
  it('10 ~ 35자 사이의 숫자 + 특수문자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('123!@$123!@$')).toBe(true);
    expect(isPwValid('12!@12!@12!')).toBe(true);
    expect(isPwValid('222!@$222!@$')).toBe(true);
  });
});
