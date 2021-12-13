import React, { FC, useCallback } from 'react';
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

type PrivateRouteProps = {
  isAccessible: boolean;
  redirectUrl?: string;
} & RouteProps;

const PrivateRoute: FC<PrivateRouteProps> = ({
  component,
  path,
  exact,
  isAccessible,
  redirectUrl,
}) => {
  const render = useCallback(
    (props: RouteComponentProps) =>
      isAccessible ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={redirectUrl ?? '/'} />
      ),
    [component, isAccessible, redirectUrl],
  );

  return <Route path={path} exact={exact} render={render} />;
};

PrivateRoute.defaultProps = {
  redirectUrl: '/',
};

export default PrivateRoute;
