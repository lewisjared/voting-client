import React from 'react'

export default class CreateRoomWidget extends React.Component {
    render() {
        return (
          <div>
            <input type="text" />
            <button onClick={() => this.props.createRoom("blah")}>
              Create Room
            </button>
          </div>)
    }
}