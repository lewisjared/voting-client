import {Map, fromJS} from 'immutable';

function setVoteState(state, newState) {
  return state.mergeIn(['state'], newState);
}

function voteEntry(state, entry) {
  const currentPair = state.getIn(['state', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  }

  return state;
}

function resetVote(state, nextState) {
  if (nextState.getIn(['state', 'id']) != state.getIn(['state', 'id'])) {
    return nextState.remove('hasVoted');
  }

  return nextState
}

function setRoom(state, room, roomState={}) {
  let cleanedState = state.remove('state').set('room', room);
  return setVoteState(cleanedState, roomState);
}

export default function vote(state = Map(), action) {
  switch (action.type) {
    case 'SET_VOTE_STATE':
      return resetVote(state, setVoteState(state, action.state));
    case 'VOTE':
      return voteEntry(state, action.entry);
    case 'SET_ROOM':
      return setRoom(state, action.room, action.state);
  }
  return state;
}