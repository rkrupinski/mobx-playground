import React, { PropTypes, Component } from 'react';

import { observer } from 'mobx-react';

@observer
class Todo extends Component {

  _onChange() {
    const { todo } = this.props;

    todo.toggle();
  }

  render() {
    const { todo } = this.props;

    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => this._onChange()}
        />
        {' '}
        <span>{todo.body}</span>
      </li>
    );
  }

}

Todo.propTypes = {
  todo: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }),
};

export default Todo;
