import React from 'react';

const MissionInfo = (props) => {
  return(
    <div className='row column small-box-border fixed-box'>
      <h3>Mission Details</h3>
      <h5>Mission Name: {props.missionName} </h5>
      <h5>Total delta-v: {props.deltaV.toFixed(2)} </h5>
      <h5>Total Mission Duration: {props.missionDuration}</h5>
    </div>
  )
}

export default MissionInfo;
