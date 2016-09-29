import React, { Component, PropTypes } from 'react';

import { observer } from 'mobx-react';

@observer(['appState'])
class clearCompletedBtn extends Component {

  _handleClick() {
    const { appState } = this.props;

    appState.clearCompleted();
  }

  render() {
    const { appState } = this.props;

    return (
      <button
        onClick={() => this._handleClick()}
        disabled={!appState.completedCount}
      >
        Clear completed
      </button>
    );
  }

  static propTypes = {
    appState: PropTypes.shape({
      clearCompleted: PropTypes.func.isRequired,
      completedCount: PropTypes.number.isRequired,
    }),
  };
}

export default clearCompletedBtn;
