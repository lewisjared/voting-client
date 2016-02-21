import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';
import remoteActionMiddleware from './../remote_action_middleware';
import DevTools from './../containers/Devtools';

export default function (socket) {
  return createStore(
    reducer,
    compose(
      applyMiddleware(
        //Enable async control flow using redux-thunk
        thunk,
        //Send state to the server
        remoteActionMiddleware(socket)
      ),
      // Also add listener for redux-devtools
      DevTools.instrument()
    )
  );
}