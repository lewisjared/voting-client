import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import remoteActionMiddleware from './../remote_action_middleware';
import DevTools from './../containers/Devtools';

export default function (socket) {
  const createCustomStore = compose(
    // Add redux middleware for the state to the server
    applyMiddleware(remoteActionMiddleware(socket)),
    // Also add listener for redux-devtools
    DevTools.instrument()
  )(createStore);

  return createCustomStore(reducer);
}