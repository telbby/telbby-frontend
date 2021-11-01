import { useState } from 'react';

const useGenerator = (
  gen: Generator,
): {
  generator: Generator;
  resetGenerator: () => void;
} => {
  const [generator, setGenerator] = useState<Generator>(gen);

  /**
   * 기존 generator를 return으로 종료시키고,
   * 새로운 generator를 state에 반영합니다.
   */
  const resetGenerator = () => {
    generator.return('error!');
    setGenerator(gen);
  };

  return { generator, resetGenerator };
};

export default useGenerator;
