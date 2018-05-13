import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import FlightContainer from './FlightContainer'

const App = props =>{
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={FlightContainer} />
      </Route>
    </Router>
  )
}

export default App;
