import React from 'react'
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
//import JoinForm from './components/Join';
import RoomContainer from './containers/Room';
import {VotingContainer} from './containers/Voting';
import {ResultsContainer} from './components/Results';
import {CreateRoomContainer} from './containers/CreateRoom';

const routes = (
  <Route component={App}>
    <Route path="/create" component={CreateRoomContainer} />
    <Route path="/room/:roomId" component={RoomContainer}>
      <IndexRoute component={VotingContainer} />
      <Route path="results" component={ResultsContainer} />
    </Route>
  </Route>
);

export default routes;
