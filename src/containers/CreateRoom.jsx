import React from 'react';
import {connect} from 'react-redux';

import CreateRoomWidget from '../components/CreateRoomWidget'
import * as actionCreators from '../action_creators'

export class CreateRoom extends React.Component {

  render() {
    return (<div className="create-room container">
      <CreateRoomWidget />
      <CreateRoomResponse link={}
    </div>)
  }
};

function selector(state) {
  return {
    link: state.client.get('newRoomLink')
  };
}

export const CreateRoomContainer = connect(
  selector,
  actionCreators
)(CreateRoom);