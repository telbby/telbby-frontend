import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from './components/common/ErrorBoundary';
import Uri from './constants/uri';
import CountPage from './pages/CountPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServicePage from './pages/ServicePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path={Uri.home} exact component={HomePage} />
        <Route path={Uri.count} exact component={CountPage} />
        <Route path={Uri.service} exact component={ServicePage} />
        <Route path={Uri.signup} exact component={SignupPage} />
        <Route path={Uri.signin} exact component={SigninPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
