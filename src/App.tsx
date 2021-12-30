import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from './components/common/ErrorBoundary';
import Uri from './constants/uri';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServiceEditPage from './pages/ServiceEditPage';
import ServicePage from './pages/ServicePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import PrivateRoute from './components/common/PrivateRoute';
import useAutoLogin from './hooks/useAutoLogin';

const App: FC = () => {
  const { isLoggedIn } = useAutoLogin();

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={Uri.home} exact component={HomePage} />
        <PrivateRoute
          path={Uri.signup}
          exact
          component={SignupPage}
          isAccessible={!isLoggedIn}
        />
        <PrivateRoute
          path={Uri.signin}
          exact
          component={SigninPage}
          isAccessible={!isLoggedIn}
        />
        <PrivateRoute
          path={Uri.service}
          exact
          component={ServicePage}
          isAccessible={isLoggedIn}
        />
        <Route path={Uri.serviceEdit} exact component={ServiceEditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
