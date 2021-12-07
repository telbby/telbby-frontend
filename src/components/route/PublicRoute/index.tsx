import React, { FC } from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';

import { useUserStateValue } from '@/atoms/userState';

type PublicRouteProps = { restricted?: boolean } & RouteProps;

const PublicRoute: FC<PublicRouteProps> = ({
  component: Component,
  restricted,
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
    user && restricted ? (
      <Redirect to="/" />
    ) : (
      <Component
        history={history}
        match={match}
        location={location}
        staticContext={staticContext}
      />
    );

  return <Route path={path} exact={exact} render={render} />;
};

PublicRoute.defaultProps = {
  restricted: false,
};

export default PublicRoute;
