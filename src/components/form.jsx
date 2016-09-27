import React, { Component, PropTypes } from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer(['appState'])
class Form extends Component {

  @observable _value = '';

  _onSubmit(e) {
    e.preventDefault();

    const value = this._value.trim();

    if (!value.length) {
      return;
    }

    const { appState } = this.props;

    appState.addTodo(value);

    this._value = '';
    this._input.focus();
  }

  _onChange(e) {
    this._value = e.target.value;
  }

  render() {
    return (
      <form onSubmit={e => this._onSubmit(e)}>
        <input
          type="text"
          value={this._value}
          onChange={e => this._onChange(e)}
          ref={node => (this._input = node)}
        />
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
