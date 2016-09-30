import React, { Component, PropTypes } from 'react';

import { observer } from 'mobx-react';

@observer(['appState'])
class Form extends Component {

  state = {
    value: '',
  };

  _onEdit(e) {
    this.setState({
      value: e.target.value,
    });
  }

  _onSubmit(e) {
    e.preventDefault();

    const { value } = this.state;
    const newTodo = value.trim();

    if (!newTodo.length) {
      return;
    }

    const { appState } = this.props;

    appState.addTodo(newTodo);

    this.setState({
      value: '',
    });

    this._input.focus();
  }

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={e => this._onSubmit(e)}>
        <input
          type="text"
          value={value}
          onChange={e => this._onEdit(e)}
          ref={node => (this._input = node)}
        />
        {' '}
        <input type="submit" value="Add todo" />
      </form>
    );
  }

  static propTypes = {
    appState: PropTypes.shape({
      addTodo: PropTypes.func.isRequired,
    }),
  };

}

export default Form;
