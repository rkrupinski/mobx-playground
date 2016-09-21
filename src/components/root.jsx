import React from 'react';

import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Layout from './layout';
import Todos from './todos';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path=":filter" component={Todos} />
      <IndexRedirect to="all" />
    </Route>
  </Router>
);
