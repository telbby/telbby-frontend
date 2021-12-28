import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useUserStateValue } from './atoms/userState';
import ErrorBoundary from './components/common/ErrorBoundary';
import PrivateRoute from './components/common/PrivateRoute';
import Uri from './constants/uri';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServiceEditPage from './pages/ServiceEditPage';
import ServicePage from './pages/ServicePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

const App: FC = () => {
  const user = useUserStateValue();

  const isAuthenticated = !!user;

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={Uri.home} exact component={HomePage} />
        <PrivateRoute
          path={Uri.signup}
          exact
          component={SignupPage}
          isAccessible={!isAuthenticated}
        />
        <PrivateRoute
          path={Uri.signin}
          exact
          component={SigninPage}
          isAccessible={!isAuthenticated}
        />
        <PrivateRoute
          path={Uri.service}
          exact
          component={ServicePage}
          isAccessible={isAuthenticated}
        />
        {/* TODO: PrivateRoute로 바꾸기 */}
        <Route
          path={`${Uri.service}/:serviceId`}
          exact
          component={ServiceEditPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
