import React from 'react'
import {Route} from 'react-router';

import App from './components/App';
import JoinForm from './components/Join';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const routes = <Route component={App}>
  <Route path="/join" component={JoinForm}/>
  <Route path="/results" component={ResultsContainer}/>
  <Route path="/" component={VotingContainer}/>
</Route>;

export default routes;
