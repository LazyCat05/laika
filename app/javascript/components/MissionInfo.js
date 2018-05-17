import React from 'react';
import { Link } from 'react-router'

const MissionInfo = (props) => {
  return(
    <div className='row column small-box-border fixed-box'>
      <h3>Mission Details</h3>
      <h5>Mission Name: {props.missionName} </h5>
      <h5>Total delta-v: {props.deltaV.toFixed(2)} </h5>
      <h5>Total Mission Duration: {props.missionDuration}</h5>
      <Link to='/missions'><h5>Back to Dashboard</h5></Link>
    </div>
  )
}

export default MissionInfo;
