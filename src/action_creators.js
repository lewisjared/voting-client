export function vote(entry) {
  return {
    type: 'VOTE',
    meta: {remote: true},
    entry: entry
  }
}

export function setState(state) {
  return {
    type: 'SET_STATE',
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