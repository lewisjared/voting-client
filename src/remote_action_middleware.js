import clone from 'lodash/clone'

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const clientId = store.getState().get('clientId');
    let clonedAction = clone(action);
    clonedAction.clientId = clientId;
    socket.emit('action', clonedAction);
  }
  return next(action);
}