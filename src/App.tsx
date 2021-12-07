import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Uri from './constants/uri';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServicePage from './pages/ServicePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

const App: FC = () => {
  return (
    <Switch>
      <Route path={Uri.home} exact component={HomePage} />
      <Route path={Uri.service} exact component={ServicePage} />
      <Route path={Uri.signup} exact component={SignupPage} />
      <Route path={Uri.signin} exact component={SigninPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
