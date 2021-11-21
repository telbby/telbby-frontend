import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Uri from './constants/uri';
import CountPage from './pages/CountPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServicePage from './pages/ServicePage';

const App: FC = () => {
  return (
    <Switch>
      <Route path={Uri.home} exact component={HomePage} />
      <Route path={Uri.count} exact component={CountPage} />
      <Route path={Uri.service} exact component={ServicePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
