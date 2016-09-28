import React from 'react';

import Radium from 'radium';

import ToggleAllBtn from './toggleAllBtn';

const styles = {
  toolbar: {
    margin: '1em 0',
  },
};

const Toolbar = () => (
  <div style={styles.toolbar}>
    <ToggleAllBtn />
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(Toolbar);
