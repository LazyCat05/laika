import React from 'react'
import { Link } from 'react-router'
import FlightInfoTile from '../components/FlightInfoTile'

class MissionInfoTile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mission: {}
    }
  }

  render(){
    let flightTiles = this.props.flights.map(flight =>{
      return(
        <FlightInfoTile
          key={flight.id}
          name={flight.name}
          arrivalDate={flight.arrival_date}
          deltaV={flight.delta_v.toFixed(2)}
          timeOfFlight={flight.time_of_flight.toFixed()}
         />
      )
    })
    return(
      <div className='card small-box-border'>
        <Link to={`/missions/${this.props.id}`}><h3>{this.props.name}</h3></Link>
        <div className='row'>
          <div className="column small-6">
            <h5>Total delta-V: {this.props.deltaV.toFixed(2)}</h5>
          </div>
          <div className="column small-6">
            <h5>Total Flight Duration: {this.props.duration} days</h5>
          </div>
        </div>
        {flightTiles}
      </div>
    )
  }
}

export default MissionInfoTile;
