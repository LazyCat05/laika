import React from 'react'
import FlightForm from './FlightForm'

class FlightContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  addNewFlight(formPayload) {
    fetch('/api/v1/flights.json', {
      credentials: 'same-origin',
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayload)
    })
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(responseFlight => {
        this.setState({ flight: responseFlight})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }
  render() {
    return(
      <div>
        <FlightForm
        addNewFlight = {this.addNewFlight}/>
        <h4>Flight Info goes here</h4>
      </div>
    )
  }
}

export default FlightContainer;
