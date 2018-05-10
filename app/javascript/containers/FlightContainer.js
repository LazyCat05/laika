import React from 'react'
import FlightForm from './FlightForm'
import FlightInfo from '../components/FlightInfo'

class FlightContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flight: null
    }
    this.addNewFlight = this.addNewFlight.bind(this)
  }

  addNewFlight(formPayload) {
    console.log(formPayload)
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
      .then(responseJSON => {
        this.setState({ flight: responseJSON.flight })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }
  render() {
    let infoBlock
    if (this.state.flight){
      infoBlock = <FlightInfo
        departure_date = {this.state.flight.departure_date}
        origin = {this.state.flight.origin_planet}
        originCoordinates = {this.state.flight.origin_coordinates}
        destination = {this.state.flight.destination_planet}
        destinationCoordinates = {this.state.flight.destination_coordinates}
        distance = {this.state.flight.distance}
        />
    }
    return(
      <div>
        <FlightForm
        addNewFlight = {this.addNewFlight}/>
        {infoBlock}
      </div>
    )
  }
}

export default FlightContainer;
