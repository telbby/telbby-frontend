import React, { FC } from 'react';
import './App.css';
import { css } from '@emotion/react';
import testImage from './assets/images/test.jpg';

const App: FC = () => {
  return (
    <>
      <h1>Hello World {process.env.APP_ENV}</h1>
      <h2
        css={css`
          color: red;
        `}
      >
        Hello Hello
      </h2>
      <img src={testImage} alt="test" width="500px" />
    </>
  );
};

export default App;
