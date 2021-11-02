import { useState } from 'react';

const useGenerator = (
  gen: Generator,
): {
  generator: Generator;
  resetGenerator: () => void;
} => {
  const [generator, setGenerator] = useState<Generator>(gen);

  const resetGenerator = () => {
    generator.return('error!');
    setGenerator(gen);
  };

  return { generator, resetGenerator };
};

export default useGenerator;
