import React, { PropTypes } from 'react';

import { observer } from 'mobx-react';

import { pluralize } from '../utils';

const ItemsLeft = (props) => {
  const { appState } = props;
  const count = appState.todoCount - appState.completedCount;

  return (
    <span>{count} {pluralize(count, 'todo')} left</span>
  );
};

ItemsLeft.propTypes = {
  appState: PropTypes.shape({
    todoCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
  }),
};

export default observer(['appState'], ItemsLeft);
