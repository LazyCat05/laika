import React from 'react'
import FlightInfo from '../components/FlightInfo';
import FlightForm from './FlightForm'
import MissionInfo from '../components/MissionInfo';

class MissionShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mission: {},
      flights: [],
      errorMessage: ''
    }
    this.addNewFlight = this.addNewFlight.bind(this)
  }

  componentDidMount(){
    let missionId = this.props.params.id
    fetch(`/api/v1/missions/${missionId}`)
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
      console.log(responseJSON)
      this.setState({
        mission: responseJSON.mission,
        flights: responseJSON.mission.flights
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
    console.log(this.state.mission)
    console.log(this.state.flights)
    let flightFormDiv
    if(this.state.mission.id) {
      flightFormDiv =
        <FlightForm
          addNewFlight={this.addNewFlight}
          missionId ={this.state.mission.id}
        />
    }
    let flights = this.state.flights.map(flight => {
      // let delta_v = flight.delta_v.toFixed(2)
      // let flightTime = flight.time_of_flight.toFixed()
      // let flightDistance = flight.distance.toFixed(2)
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
        <div className='columns medium-6' >
          <MissionInfo />
        </div>
        <div className= 'columns medium-6'>
          {flights}
          {flightFormDiv}
        </div>
      </div>
    )
  }

}

export default MissionShowContainer;
