import React from 'react'

import './Question.scss'

export default class Question extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="question">
          <h1>{this.props.title}</h1>
        </div>

      </div>
    )
  }
}
