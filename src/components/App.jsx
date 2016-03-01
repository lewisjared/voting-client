import React from 'react';
import {List, Map} from 'immutable';

import AppNav from './AppNav'
import Footer from './Footer'

export default React.createClass({
  render: function () {
    return (
      <div>
        <AppNav />
        {this.props.children}
        <Footer />
      </div>
    )

  }
});