import React, { PropTypes } from 'react';

import { TODOS_ALL, TODOS_PENDING, TODOS_COMPLETED } from '../constants';
import FilterLink from './filterLink';

const Nav = ({ filter }) => (
  <nav>
    <FilterLink filter={filter} type={TODOS_ALL} />
    {' '}
    <FilterLink filter={filter} type={TODOS_PENDING} />
    {' '}
    <FilterLink filter={filter} type={TODOS_COMPLETED} />
  </nav>
);

Nav.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Nav;
