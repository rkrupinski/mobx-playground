import React from 'react';

import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';

import State from '../state';
import Layout from './layout';
import Todos from './todos';

const appState = new State();

appState.addTodo('lorem uipsum'); // FIXME

export default () => (
  <Provider appState={appState}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <Route path=":filter" component={Todos} />
        <IndexRedirect to="all" />
      </Route>
    </Router>
  </Provider>
);
