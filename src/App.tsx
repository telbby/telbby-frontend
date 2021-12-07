import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import Uri from './constants/uri';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServicePage from './pages/ServicePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';

const App: FC = () => {
  return (
    <Switch>
      <PublicRoute path={Uri.home} exact component={HomePage} />
      <PrivateRoute path={Uri.service} exact component={ServicePage} />
      <PublicRoute restricted path={Uri.signup} exact component={SignupPage} />
      <PublicRoute restricted path={Uri.signin} exact component={SigninPage} />
      <PublicRoute component={NotFoundPage} />
    </Switch>
  );
};

export default App;
