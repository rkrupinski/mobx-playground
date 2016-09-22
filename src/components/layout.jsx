import React, { PropTypes } from 'react';

import DevTools from 'mobx-react-devtools';

const Layout = props => (
  <div className="container">
    {props.children}
    <DevTools />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
