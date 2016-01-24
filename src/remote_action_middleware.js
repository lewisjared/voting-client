import clone from 'lodash/clone'

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const state = store.getState()
    let clonedAction = clone(action);
    clonedAction.clientId = state.client.get('id');
    clonedAction.room = state.vote.get('room');

    socket.emit('action', clonedAction);
  }
  return next(action);
}