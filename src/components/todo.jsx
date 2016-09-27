import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

import { observer } from 'mobx-react';

import { ENTER_KEY, ESCAPE_KEY } from '../constants';

const styles = {
  todo: {
    marginBottom: 5,
  },
  todoBody: {
    ':hover': {
      cursor: 'pointer',
      background: 'lightcyan',
    },
  },
  hidden: {
    display: 'none',
  },
};

@observer(['appState'])
@Radium
class Todo extends Component {

  _onToggle() {
    const { todo } = this.props;

    todo.toggle();
  }

  _onEdit(e) {
    this.setState({
      edited: e.target.value,
    });
  }

  _onKeyDown(e) {
    switch (e.keyCode) {
      case ENTER_KEY:
        this._onEdited();
        break;
      case ESCAPE_KEY:
        this._onDoneEditing();
        break;
      default:
        // Nope
    }
  }

  _onStartEditing() {
    const { appState, todo } = this.props;
    const { edited } = this.state;

    appState.startEditing(todo.id);

    setTimeout(() => {
      this._input.focus();
      this._input.selectionStart = edited.length;
    });
  }

  _onDoneEditing() {
    const { todo, appState } = this.props;

    appState.doneEditing();

    this.setState({
      edited: todo.body,
    });
  }

  _onEdited() {
    if (!this._isBeingEdited()) {
      return;
    }

    const { edited } = this.state;
    const { todo } = this.props;

    const value = edited.trim();

    if (value.length) {
      todo.update(value);
    }

    this._onDoneEditing();
  }

  _onRemove() {
    const { todo, appState } = this.props;

    appState.removeTodo(todo.id);
  }

  _isBeingEdited() {
    const { todo, appState } = this.props;

    return todo.id === appState.beingEdited;
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      edited: props.todo.body,
    };
  }

  render() {
    const { todo } = this.props;
    const { edited } = this.state;

    return (
      <li style={[styles.todo]}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => this._onToggle()}
        />
        {' '}
        <span
          onClick={() => this._onStartEditing()}
          style={[
            styles.todoBody,
            this._isBeingEdited() && styles.hidden,
          ]}
        >
          {todo.body}
        </span>
        <input
          type="text"
          style={[!this._isBeingEdited() && styles.hidden]}
          onKeyDown={e => this._onKeyDown(e)}
          onChange={e => this._onEdit(e)}
          onBlur={() => this._onEdited()}
          ref={node => (this._input = node)}
          value={edited}
        />
        {' '}
        <button onClick={() => this._onRemove()}>x</button>
      </li>
    );
  }

  static propTypes = {
    todo: PropTypes.shape({
      body: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
    appState: PropTypes.shape({
      beingEdited: PropTypes.string.isRequired,
    }),
  };

}

export default Todo;
