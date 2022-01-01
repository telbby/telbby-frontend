import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';
import ErrorBoundary from './components/common/ErrorBoundary';

import Uri from './constants/uri';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServiceEditPage from './pages/ServiceEditPage';
import ServicePage from './pages/ServicePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import FeedbackMessagePage from './pages/FeedbackMessagePage';

import { useUserStateValue } from './atoms/userState';

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

        {/* 
          @TODO PrivateRoute로 변경
            요 두 개의 페이지는 원래 Private으로 가야 하지만 아직은 테스트 용이성을 위해 Route로 남깁니다.
            추후 채팅을 구현할 때 PrivateRoute로 변경합시다!
         */}
        <Route path={Uri.serviceEdit} exact component={ServiceEditPage} />
        <Route path={Uri.feedback} exact component={FeedbackMessagePage} />

        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
