import React from 'react'

export default class AppNav extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" ng-click="isCollapsed = !isCollapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">Voting app</a>
          </div>
        </div>
      </div>
    )
  }
}