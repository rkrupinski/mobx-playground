import React, { Component } from 'react';

import { observer } from 'mobx-react';

import Todo from './todo';

/* eslint-disable */
@observer(['appState'])
export default class List extends Component {
  render() {
    const { appState } = this.props;

    return (
      <ul>
        {appState.todos.map(todo =>
            <Todo key={todo.id} data={todo} />)}
      </ul>
    );
  }
}
/* eslint-enable */
