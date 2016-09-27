import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { observer } from 'mobx-react';

import Todo from './todo';

const styles = {
  list: {
    padding: 0,
    listStyle: 'none',
  },
};

@observer(['appState'])
@Radium
class List extends Component {

  render() {
    const { appState } = this.props;

    return (
      <ul style={styles.list}>
        {appState.todos.map(todo =>
          <Todo key={todo.id} todo={todo} />)}
      </ul>
    );
  }

  static propTypes = {
    appState: PropTypes.shape({
      todos: PropTypes.array.isRequired,
    }),
  };
}

export default List;
