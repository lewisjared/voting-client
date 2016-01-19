import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import Root from './containers/Root';
import {setState, setClientId} from './action_creators';
import getClientId from './client_id';
import configureStore from './store/configureStore';

require('./styles.scss');

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

const store = configureStore(socket);
store.dispatch(setClientId(getClientId()));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);