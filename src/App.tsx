import React, { FC } from 'react';
import { css } from '@emotion/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Uri from './constants/uri';
import HomePage from './pages/Home/HomePage';
import CountPage from './pages/Count/CountPage';
import Navigation from './components/Navigation/Navigation';

const appTitleStyle = css`
  color: red;
`;

const App: FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <h1 css={appTitleStyle}>Hello Hello</h1>
        <div>
          <Navigation />
        </div>
        <div>
          <Switch>
            <Route path={Uri.home} exact component={HomePage} />
            <Route path={Uri.count} exact component={CountPage} />
          </Switch>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
