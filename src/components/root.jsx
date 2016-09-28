import React from 'react';

import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';

import { TODOS_ALL } from '../constants';
import { restoreState } from '../utils';
import State from '../state';
import Layout from './layout';
import Todos from './todos';

const appState = new State(restoreState());

export default () => (
  <Provider appState={appState}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <Route path=":filter" component={Todos} />
        <IndexRedirect to={TODOS_ALL} />
      </Route>
    </Router>
  </Provider>
);
