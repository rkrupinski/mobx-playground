import React, { PropTypes } from 'react';

const Todo = ({ data }) => <li>{data.body}</li>;

Todo.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }),
};

export default Todo;
