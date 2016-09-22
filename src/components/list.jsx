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
        {appState.todos.map((item, index) =>
            <Todo key={index} data={item} />)}
      </ul>
    );
  }
}
/* eslint-enable */
