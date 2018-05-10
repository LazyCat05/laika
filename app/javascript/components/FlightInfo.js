import React from 'react'

const FlightInfo = (props) => {
  console.log(props)
  return (
    <div>
      <h5>Flight Information</h5>
      <h5>Departure Date: {props.departure_date}</h5>
      <h5>Origin: {props.origin}</h5>
      <p>Coordinates: X: {props.originCoordinates[0]} Y: {props.originCoordinates[1]} Z: {props.originCoordinates[2]}</p>
      <h5>Destination: {props.destination}</h5>
      <p>Coordiantes: X: {props.destinationCoordinates[0]} Y: {props.destinationCoordinates[1]} Z: {props.destinationCoordinates[2]}</p>
      <h5>Distance (AU): {props.distance}</h5>
    </div>
  )
}

export default FlightInfo;
