import React, { PropTypes } from 'react';

const Layout = props => (
  <div className="container">
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
