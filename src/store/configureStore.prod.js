import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import remoteActionMiddleware from './../remote_action_middleware';

export default function (socket) {
  const createCustomStore = compose(
    // Add redux middleware for the state to the server
    applyMiddleware(remoteActionMiddleware(socket))
  )(createStore);

  return createCustomStore(reducer);
}