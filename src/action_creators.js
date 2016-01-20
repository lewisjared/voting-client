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

export function setRoom(room) {
  return {
    type: 'SET_ROOM',
    room
  }
}