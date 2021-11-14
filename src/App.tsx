import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Uri from './constants/uri';
import CountPage from './pages/CountPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

const App: FC = () => {
  return (
    <Switch>
      <Route path={Uri.home} exact component={HomePage} />
      <Route path={Uri.count} exact component={CountPage} />
      <Route path={Uri.signup} exact component={SignupPage} />
    </Switch>
  );
};

export default App;
