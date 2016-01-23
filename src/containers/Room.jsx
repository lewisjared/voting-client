import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

class Room extends Component {
  componentWillMount() {
    // Inform the server that we have changed state
    this.props.setRoom(this.props.routeParams.roomId);
    console.log('Mounting Room', this.props)
  }
  render() {
    return this.props.children
  }
}

function select(state) {
  return {

  }
}

export default connect(
  select,
  actionCreators
)(Room);