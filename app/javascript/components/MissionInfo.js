import React from 'react';

const MissionInfo = (props) => {
  return(
    <div className='row column small-box-border'>
      <h4>Mission Details</h4>
      <h5>Mission Name: {props.missionName} </h5>
      <h5>Total delta-v: {props.total_delta_v} </h5>
      <h5>Total Mission Duration: {props.total_mission_duration}</h5>
    </div>
  )
}

export default MissionInfo;
