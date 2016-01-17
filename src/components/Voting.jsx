import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner}/> :
        <Vote {...this.props} />}
    </div>;
  }
});

function selector(state) {
  return {
    winner: state.get('winner'),
    hasVoted: state.get('hasVoted'),
    pair: state.getIn(['vote', 'pair'])
  };
}

export const VotingContainer = connect(
  selector,
  actionCreators
)(Voting);