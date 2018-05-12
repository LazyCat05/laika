import React from 'react'

const FlightInfo = (props) => {
  return (
    <div>
      <h5>Flight Information</h5>
      <h5>Departure Date: {props.departure_date}</h5>
      <h5>Angular Separation: {props.angularSeparation}</h5>
      <h5>Origin: {props.origin}</h5>
      <p>Coordinates: X: {props.originCoordinates[0]} Y: {props.originCoordinates[1]} Z: {props.originCoordinates[2]}</p>
      <h5>Destination: {props.destination}</h5>
      <p>Coordiantes: X: {props.destinationCoordinates[0]} Y: {props.destinationCoordinates[1]} Z: {props.destinationCoordinates[2]}</p>
      <h5>Launch Date: {props.launchDate}</h5>
      <h5>Distance (AU): {props.distance}</h5>
      <h5>Delta-V (m/s): {props.deltaV}</h5>
    </div>
  )
}

export default FlightInfo;
