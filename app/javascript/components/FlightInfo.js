import React from 'react'

const FlightInfo = (props) => {
  console.log(props)
  return (
    <div className='small-box-border'>
      <h5>Flight Information</h5>
      <h5>Proposed Date: {props.departure_date}</h5>
      <h5>Launch Date: {props.launchDate}</h5>
      <h5>Arrival Date: {props.arrival_date}</h5>
      <div className="row">
        <div className="coordinate-boxes-left">
          <div className="columns container small-10 medium-5 small-box-border coordinate-boxes-left">
            <h5>Origin: {props.origin}</h5>
            <p>Coordinates:</p>
            <p>X: {props.originCoordinates[0]}</p>
            <p>Y: {props.originCoordinates[1]}</p>
            <p>Z: {props.originCoordinates[2]}</p>
          </div>
        </div>
        <div className="coordinate-boxes-right">
          <div className="columns container small-10 medium-5 small-box-border ">
            <h5>Destination: {props.destination}</h5>
            <p>Coordinates:</p>
            <p>X: {props.destinationCoordinates[0]}</p>
            <p>Y: {props.destinationCoordinates[1]}</p>
            <p>Z: {props.destinationCoordinates[2]}</p>
          </div>
        </div>
        </div>
      <div className="row">
        <div className="columns small-10">
          <h5>Time of Flight: {props.flight_time} days</h5>
          <h5>Distance (AU): {props.distance}</h5>
          <h5>Delta-V (m/s): {props.deltaV}</h5>
        </div>
      </div>
    </div>
  )
}

export default FlightInfo;
