import {Map} from 'immutable';

export default function client(state = Map(), action) {
  switch(action.type) {
    case 'SET_CLIENT_ID':
      return state.set('id', action.clientId);
  }
  return state;
}