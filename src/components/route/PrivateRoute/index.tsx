import React, { FC } from 'react';
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import { useUserStateValue } from '@/atoms/userState';

type PrivateRouteProps = RouteProps;

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  path,
  exact,
}) => {
  const user = useUserStateValue();

  const render = ({
    history,
    match,
    location,
    staticContext,
  }: RouteComponentProps) =>
    user ? (
      <Component
        history={history}
        match={match}
        location={location}
        staticContext={staticContext}
      />
    ) : (
      <Redirect to="/" />
    );
  return <Route path={path} exact={exact} render={render} />;
};

export default PrivateRoute;
