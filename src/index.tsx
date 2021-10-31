import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root'),
);
