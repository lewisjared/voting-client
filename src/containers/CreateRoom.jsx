import React from 'react';
import {connect} from 'react-redux';

import CreateRoomWidget from '../components/CreateRoomWidget'
import * as actionCreators from '../action_creators'

export class CreateRoom extends React.Component {

  render() {
    return (<div className="create-room container">
      <CreateRoomWidget />
    </div>)
  }
};

function selector(state) {
  return {
    winner: state.vote.get('winner'),
    hasVoted: state.vote.get('hasVoted'),
    pair: state.vote.getIn(['state', 'pair'])
  };
}

export const CreateRoomContainer = connect(
  selector,
  actionCreators
)(CreateRoom);