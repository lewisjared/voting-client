import {configureRoom} from './socket';

export function vote(entry) {
  return {
    type: 'VOTE',
    meta: {remote: true},
    entry: entry
  }
}

export function setState(state) {
  return {
    type: 'SET_VOTE_STATE',
    state: state
  }
}

export function next() {
  return {
    type: 'NEXT',
    meta: {remote: true}
  }
}

export function setClientId(id) {
  return {
    type: 'SET_CLIENT_ID',
    clientId: id
  };
}

export function leaveRoom(room) {
  return {
    type: 'LEAVE_ROOM',
    room
  }
}

export function joinRoom(room, state) {
  return {
    type: 'JOIN_ROOM',
    room,
    state
  }
}

export function setRoom(room) {
  return function (dispatch) {
    // subscribe to the new room
    return configureRoom(room).then(
      state => dispatch(joinRoom(room, state)),
      error => console.log('Could not join room', room, error)
    )
  };
}