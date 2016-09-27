import React, { PropTypes } from 'react';

import { observer } from 'mobx-react';

import Todo from './todo';

const List = observer(['appState'], ({ appState }) => (
  <ul>
    {appState.todos.map(todo =>
      <Todo key={todo.id} todo={todo} />)}
  </ul>
));

List.wrappedComponent.propTypes = {
  appState: PropTypes.shape({
    todos: PropTypes.array.isRequired,
  }),
};

export default List;
