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

  deleteFlight(formPayload) {
    fetch('api/v1/flights/destroy.json', {
      credentials: 'same-origin',
      method: 'delete',
      headers: { 'Content_Type': 'application/json'},
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
        this.setState({ message: responseJSON.body })
      })
      .catch(error => console.error`Error in fetch: ${error.messsage}`)
  }


  render(){
    let flightFormDiv
    if(this.state.mission.id) {
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
        id = {flight.id}
        name={flight.name}
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
    let missionInfoDiv
    if(this.state.mission.hasOwnProperty('name')){
      missionInfoDiv =
      <MissionInfo
        missionName={this.state.mission.name}
        deltaV={this.state.mission.total_delta_v}
        missionDuration={this.state.mission.total_mission_duration}
        flights={this.state.mission.flights}
      />
    }

    return(
      <div className='row'>
        <div className='columns small-12' >
          {missionInfoDiv}
        </div>
        <div className= 'columns small-12'>
          {flights}
          {flightFormDiv}
        </div>
      </div>
    )
  }

}

export default MissionShowContainer;
