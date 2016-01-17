import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  }

  return state;
}

function resetVote(state, nextState) {
  if (nextState.getIn(['vote', 'id']) != state.getIn(['vote', 'id'])) {
    return nextState.remove('hasVoted');
  }

  return nextState
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return resetVote(state, setState(state, action.state));
    case 'VOTE':
      return vote(state, action.entry);
  }
  return state;
}