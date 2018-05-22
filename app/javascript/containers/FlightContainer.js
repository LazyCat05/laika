import React from 'react'
import { Link } from 'react-router'
import FlightForm from './FlightForm'
import FlightInfo from '../components/FlightInfo'
import DeleteFlightForm from '../components/DeleteFlightForm'

class FlightContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flight: null,
      message: null
    }
    this.addNewFlight = this.addNewFlight.bind(this)
    // this.saveFlight = this.saveFlight.bind(this)
    this.deleteFlight = this.deleteFlight.bind(this)
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
        console.log(responseJSON.flight)
        this.setState({ flight: responseJSON.flight })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  deleteFlight(formPayload) {
    fetch('api/v1/flights/delete.json', {
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
        this.setState({
          flight: null,
          message: responseJSON.body })
      })
      .catch(error => console.error`Error in fetch: ${error.messsage}`)
  }


  // saveFlight(formPayload) {
  //   fetch('api/v1/flights/save.json', {
  //     credentials: 'same-origin',
  //     method: 'post',
  //     headers: { 'Content_Type': 'application/json'},
  //     body: JSON.stringify(formPayload)
  //   })
  //     .then(response => {
  //       if(response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
  //         throw(error);
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(responseJSON => {
  //       this.setState({ message: responseJSON.body })
  //     })
  //     .catch(error => console.error`Error in fetch: ${error.messsage}`)
  // }

  render() {
    let infoBlock
    let deleteFlightButton
    if (this.state.flight){
      infoBlock =
        <div className='row'>
          <div className='column small-12'>
            <FlightInfo
              name={this.state.flight.name}
              departure_date = {this.state.flight.departure_date}
              arrival_date = {this.state.flight.arrival_date}
              flight_time = {this.state.flight.time_of_flight}
              origin = {this.state.flight.origin_planet}
              originCoordinates = {this.state.flight.origin_coordinates}
              destination = {this.state.flight.destination_planet}
              destinationCoordinates = {this.state.flight.destination_coordinates}
              distance = {this.state.flight.distance}
              deltaV = {this.state.flight.delta_v}
              launchDate = {this.state.flight.launch_date}
              arrival_date = {this.state.flight.arrival_date}
            />
          </div>
        </div>
    }
    if(this.state.flight.id) {
      deleteFlightButton = <DeleteFlightForm
      deleteFlight = {this.deleteFlight}
      flightId = {this.state.flight.id}
    />
  }
    return(
      <div className='row'>
        <div className='columns small-12 small-centered'>
          <div>
            <Link to='missions'>Mission Dashboard</Link>
          </div>
          <div className="column small-12 small-centered">
            <FlightForm
              addNewFlight = {this.addNewFlight}
              missionId = {null}
            />
            <div>
              {infoBlock}
              {deleteFlightButton}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlightContainer;
