import React from 'react';
import ReactDOM from 'react-dom';

import socket from './socket';
import Root from './containers/Root';
import {setState, setClientId} from './action_creators';
import getClientId from './client_id';
import configureStore from './store/configureStore';

require('./styles.scss');

socket.on('state', state =>
  store.dispatch(setState(state))
);

const store = configureStore(socket);
store.dispatch(setClientId(getClientId()));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);