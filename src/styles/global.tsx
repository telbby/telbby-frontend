import React, { ReactElement } from 'react';

import { Global, css } from '@emotion/react';

const style = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100vh;
  }

  button[type='button'] {
    cursor: pointer;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const GlobalStyle = (): ReactElement => {
  return <Global styles={style} />;
};

export default GlobalStyle;
