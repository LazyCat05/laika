import React from 'react';
import { Link } from 'react-router'
import DeltaVChart from '../containers/DeltaVChart'
import MissionDurationChart from '../containers/MissionDurationChart'

const MissionInfo = (props) => {
  return(
    <div className='row column small-centered small-box-border'>
      <h3>Mission Details</h3>
      <h5>Mission Name: {props.missionName} </h5>
      <h5>Total delta-v: {props.deltaV.toFixed(2)} meters/second</h5>
      <h5>Total Mission Duration: {props.missionDuration} days</h5>
      <div className='row'>
        <div className='column small-12 medium-6'>
          <DeltaVChart
            flights={props.flights}/>
          </div>
          <div className='column small-12 medium-6'>
            <MissionDurationChart
              flights={props.flights}/>
          </div>
      </div>
      <Link to='/missions'><h5>Back to Dashboard</h5></Link>
    </div>
  )
}

export default MissionInfo;
