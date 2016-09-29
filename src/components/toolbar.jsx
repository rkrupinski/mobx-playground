import React from 'react';

import Radium from 'radium';

import ToggleAllBtn from './toggleAllBtn';
import ClearCompletedBtn from './clearCompletedBtn';
import ItemsLeft from './itemsLeft';

const styles = {
  toolbar: {
    margin: '1em 0',
  },
};

const Toolbar = () => (
  <div style={styles.toolbar}>
    <ToggleAllBtn />
    {' '}
    <ClearCompletedBtn />
    {' '}
    <ItemsLeft />
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(Toolbar);
