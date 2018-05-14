import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import FlightContainer from './FlightContainer'
import MissionFormContainer from './MissionFormContainer'

const App = props =>{
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={FlightContainer} />
        <Route path="missions/new" component={MissionFormContainer} />
      </Route>
    </Router>
  )
}

export default App;
