import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@emotion/react';

import App from './App';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root'),
);
