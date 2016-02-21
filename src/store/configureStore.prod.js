import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';
import remoteActionMiddleware from './../remote_action_middleware';

export default function (socket) {
  return createStore(reducer,
    applyMiddleware(
      //Enable async control flow using redux-thunk
      thunk,
      //Send state to the server
      remoteActionMiddleware(socket)
    )
  );
}