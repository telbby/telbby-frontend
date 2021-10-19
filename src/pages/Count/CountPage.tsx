import React, { FC } from 'react';

import { useCountValue, useSetCount } from '@/atoms/countState';
import { css } from '@emotion/react';

const countValueStyle = css`
  color: blue;
`;

const CountPage: FC = () => {
  const count = useCountValue();
  const setCount = useSetCount();

  const onPlus = () => setCount(count + 1);
  const onMinus = () => setCount(count - 1);

  return (
    <>
      <h1>Count</h1>
      <h2 css={countValueStyle}>{count}</h2>

      <div>
        <button type="button" onClick={onPlus}>
          +
        </button>
        <button type="button" onClick={onMinus}>
          -
        </button>
      </div>
    </>
  );
};

export default CountPage;
