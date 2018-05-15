import React from 'react'

class MissionShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mission: {},
      flights: [],
      errorMessage: ''
    }
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

  render(){
    console.log(this.state.mission)
    console.log(this.state.flights)
    let flights = this.state.flights.map(flight => {
      return(
      <FlightInfo
        key = {flight.delta_v}
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
        <div className= 'columns small-10 medium-5'>
          {flights}
        </div>
      </div>
    )
  }

}

export default MissionShowContainer;
