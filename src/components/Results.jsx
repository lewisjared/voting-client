import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Winner from './Winner';
import * as actionCreators from '../action_creators';

export const VOTE_WIDTH_PERCENT = 8;

export const Results = React.createClass({
  mixins: [PureRenderMixin],
  getPair: function () {
    return this.props.pair || [];
  },
  getVotesBlockWidth: function (entry) {
    return (this.getVotes(entry) * VOTE_WIDTH_PERCENT + '%');
  },
  getVotes: function (entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  },
  render: function () {
    return this.props.winner ?
      <Winner ref="winner" winner={this.props.winner}/> :
      <div className="results">
        <div className="tally">
          {this.getPair().map(entry =>
            <div key={entry} className="entry">
              <h1>{entry}</h1>
              <div className="voteVisualisation">
                <div className="votesBlock"
                     style={{width: this.getVotesBlockWidth(entry)}}>
                </div>
              </div>
              <div className="voteCount">
                {this.getVotes(entry)}
              </div>
            </div>
          )}
        </div>
        <div className="management">
          <button ref="next" className="next" onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>;
  }
});

function selector(state) {
  return {
    winner: state.get('winner'),
    tally: state.getIn(['vote', 'tally']),
    pair: state.getIn(['vote', 'pair'])
  };
}

export const ResultsContainer = connect(
  selector,
  actionCreators
)(Results);