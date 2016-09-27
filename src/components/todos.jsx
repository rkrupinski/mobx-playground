import React, { PropTypes } from 'react';

import List from './list';
import Form from './form';

const Todos = (props) => {
  const { params } = props;

  return (
    <div>
      <Form />
      <List filter={params.filter} />
    </div>
  );
};

Todos.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string.isRequired,
  }),
};

export default Todos;
