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
    const { appState, filter } = this.props;

    console.log(filter);

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
    filter: PropTypes.string.isRequired,
  };
}

export default List;
