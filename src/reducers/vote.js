import {Map, fromJS} from 'immutable';

function setVoteState(state, newState) {
  return state.merge(newState);
}

function voteEntry(state, entry) {
  const currentPair = state.get('pair');
  console.log(currentPair);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  }

  return state;
}

function resetVote(state, nextState) {
  if (nextState.get('id') != state.get('id')) {
    return nextState.remove('hasVoted');
  }

  return nextState
}

export default function vote(state = Map(), action) {
  switch (action.type) {
    case 'SET_VOTE_STATE':
      return resetVote(state, setVoteState(state, action.state));
    case 'VOTE':
      return voteEntry(state, action.entry);
  }
  return state;
}