import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { observer } from 'mobx-react';

import { TODOS_PENDING, TODOS_COMPLETED } from '../constants';
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

  static getFilterFn(filter) {
    switch (filter) {
      case TODOS_PENDING:
        return ({ completed }) => !completed;
      case TODOS_COMPLETED:
        return ({ completed }) => completed;
      default:
        return () => true;
    }
  }

  render() {
    const { appState, filter } = this.props;

    const filteredList = appState.todos.filter(List.getFilterFn(filter));

    return (
      filteredList.length ?
        <ul style={styles.list}>
          {filteredList.map(todo =>
            <Todo key={todo.id} todo={todo} />)}
        </ul>
        :
        <p>Hooray, no todos!</p>
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
