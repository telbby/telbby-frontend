import React, { FC } from 'react';
import { css } from '@emotion/react';

const App: FC = () => {
  return (
    <h1
      css={css`
        color: red;
      `}
    >
      Hello Hello
    </h1>
  );
};

export default App;
