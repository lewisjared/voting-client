import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

import Question from './Question'

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function () {
    return this.props.pair || [];
  },
  isDisabled: function () {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function (entry) {
    return this.props.hasVoted === entry;
  },
  render: function () {
    return <div className="voting container">
      <Question title="Hello"/>
      {this.getPair().map(entry =>
        <div key={entry} className="col-md-6">
          <button className={classNames('vote-button',{voted: this.hasVotedFor(entry)})}
                  onClick={() => this.props.vote(entry)}
                  disabled={this.isDisabled()}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
        </div>
      )};
    </div>;
  }
});