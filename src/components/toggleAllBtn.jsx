import React, { Component, PropTypes } from 'react';

import { observer } from 'mobx-react';

@observer(['appState'])
class ToggleAllBtn extends Component {

  _handleClick() {
    const { appState } = this.props;

    appState.toggleAll();
  }

  render() {
    return (
      <button onClick={() => this._handleClick()}>Toggle all</button>
    );
  }

  static propTypes = {
    appState: PropTypes.shape({
      toggleAll: PropTypes.func.isRequired,
    }),
  };

}

export default ToggleAllBtn;
