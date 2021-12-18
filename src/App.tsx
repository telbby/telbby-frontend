import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useUserStateValue } from './atoms/userState';
import ErrorBoundary from './components/common/ErrorBoundary';
import PrivateRoute from './components/common/PrivateRoute';
import Uri from './constants/uri';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
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
        <Route path={Uri.chat} exact component={ChatPage} />
        {/* TODO: 새로고침 시 user state 유지되는 버그 해결 후 PrivateRoute로 수정
        <PrivateRoute
          path={Uri.chat}
          exact
          component={ChatPage}
          isAccessible={isAuthenticated}
        /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
