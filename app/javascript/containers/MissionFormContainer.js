import React from 'react'
import MissionForm from './MissionForm'
import FlightForm from './FlightForm'
import FlightInfo from '../components/FlightInfo'

class MissionFormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      mission: {
        id: null
      },
      flights: []
    }
    this.addNewMission = this.addNewMission.bind(this)
    this.addNewFlight = this.addNewFlight.bind(this)
  }
  addNewMission(formPayload) {
    fetch('/api/v1/missions.json', {
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
      this.setState({
        mission: responseJSON.mission,
        flights: []
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
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
      .then(responseJSON => {
        let flightListing = this.state.flights.concat(responseJSON.flight)
        this.setState ({
          flights: flightListing
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render(){
    let flightFormDiv
    if(this.state.mission.id != null) {
      flightFormDiv =
        <FlightForm
          addNewFlight={this.addNewFlight}
          missionId ={this.state.mission.id}
        />
    }
    let flights = this.state.flights.map(flight => {
      return(
      <FlightInfo
        key = {flight.id}
        departure_date = {flight.departure_date}
        arrival_date = {flight.arrival_date}
        origin = {flight.origin_planet}
        originCoordinates = {flight.origin_coordinates}
        destination = {flight.destination_planet}
        destinationCoordinates = {flight.destination_coordinates}
        distance = {flight.distance}
        deltaV = {flight.delta_v}
        angularSeparation = {flight.angular_separation}
        launchDate = {flight.launch_date}
        flight_time = {flight.time_of_flight}
      />
    )
    })
    return(
    <div className='row'>
      <div className='column small-10'>
        <MissionForm
          addNewMission={this.addNewMission}
        />
        {flights}
        {flightFormDiv}
      </div>
    </div>
  )
  }
}

export default MissionFormContainer;
