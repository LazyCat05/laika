import React from 'react'

const FlightInfoTile = (props) => {
  return(
    <div className='small-box-border'>
      <h4>{props.name}</h4>
      <h5>delta-V: {props.deltaV}</h5>
      <h5>Flight Time: {props.timeOfFlight} days</h5>
      <h5>Arrival Date: {props.arrivalDate}</h5>
    </div>
  )
}

export default FlightInfoTile;
