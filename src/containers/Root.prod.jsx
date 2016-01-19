import React, {Component} from 'react';
import Router, {Route} from 'react-router';
import {Provider} from 'react-redux';

import routes from '../routes';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>;
  };
}
