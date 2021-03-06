import React, { Component, PropTypes } from 'react';

import { observer } from 'mobx-react';

@observer(['appState'])
class ToggleAllBtn extends Component {

  _handleClick() {
    const { appState } = this.props;

    appState.toggleAll();
  }

  render() {
    const { appState } = this.props;

    return (
      <button
        onClick={() => this._handleClick()}
        disabled={!appState.todoCount}
      >
        Toggle all
      </button>
    );
  }

  static propTypes = {
    appState: PropTypes.shape({
      toggleAll: PropTypes.func.isRequired,
      todoCount: PropTypes.number.isRequired,
    }),
  };

}

export default ToggleAllBtn;
