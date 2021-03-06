import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import FlightContainer from './FlightContainer'
import MissionFormContainer from './MissionFormContainer'
import MissionShowContainer from './MissionShowContainer'
import MissionDashboard from './MissionDashboard'

const App = props =>{
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={FlightContainer} />
        <Route path="missions" component={MissionDashboard} />
        <Route path="missions/new" component={MissionFormContainer} />
        <Route path="missions/:id" component={MissionShowContainer} />
      </Route>
    </Router>
  )
}

export default App;
