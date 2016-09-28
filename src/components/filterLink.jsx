import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import { capitalize } from '../utils';

const FilterLink = ({ type, filter }) => {
  const isActive = filter === type;
  const label = capitalize(type);

  return (
    isActive ?
      <span>{label}</span>
      :
      <Link to={type}>{label}</Link>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FilterLink;
