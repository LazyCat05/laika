import React from 'react'
import PositionChart from './PositionChart'

const FlightInfo = (props) => {
  return (
    <div className='row small-box-border'>
      <div className='column'>
        <div className='row'>
          <h4>Flight: {props.name}</h4>
          <h5>Proposed Date: {props.departure_date}</h5>
          <h5>Launch Date: {props.launchDate}</h5>
          <h5>Arrival Date: {props.arrival_date}</h5>
        </div>
        <div className="row">
          <div className="columns small-10 medium-5 small-box-border">
            <PositionChart
              flightId={props.id}
              origin={props.origin}
              originCoordinates={props.originCoordinates}
              destination={props.destination}
              destinationCoordinates={props.destinationCoordinates} />
          </div>
            <div className="columns small-10 medium-3 small-box-border">
              <h5>Origin: {props.origin}</h5>
              <p>Coordinates:</p>
              <p>X: {props.originCoordinates[0].toFixed(2)}</p>
              <p>Y: {props.originCoordinates[1].toFixed(2)}</p>
              <p>Z: {props.originCoordinates[2].toFixed(2)}</p>
            </div>
            <div className="columns small-10 medium-3 small-box-border ">
              <h5>Destination: {props.destination}</h5>
              <p>Coordinates:</p>
              <p>X: {props.destinationCoordinates[0].toFixed(2)}</p>
              <p>Y: {props.destinationCoordinates[1].toFixed(2)}</p>
              <p>Z: {props.destinationCoordinates[2].toFixed(2)}</p>
            </div>
        </div>
        <div className="row">
          <div className="column">
            <h5>Time of Flight: {props.flight_time.toFixed()} days</h5>
            <h5>Distance (AU): {props.distance.toFixed(2)}</h5>
            <h5>Distance (million km): {((props.distance * 1.496 * 10 ** 8) / 1000000).toFixed(2)}</h5>
            <h5>Delta-V (m/s): {props.deltaV.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightInfo;
