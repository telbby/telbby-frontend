/* eslint-disable no-restricted-syntax */
import { useState } from 'react';

/**
 * 배열 형태의 generator를 받아,
 * Generator 타입의 상태 generator와 reset 할 수 있는 함수를 반환합니다.
 */
const useGenerator = (
  param: unknown[],
): [generator: Generator, reset: () => void] => {
  function* gen() {
    for (const val of param) {
      yield val;
    }
    // const yieldValue = (val: unknown) => yield val;
    // param.forEach((p) => yieldValue(p));
  }

  const [generator, setGenerator] = useState<Generator>(gen);

  const reset = () => {
    generator.return('');
    setGenerator(gen);
  };

  return [generator, reset];
};

export default useGenerator;
