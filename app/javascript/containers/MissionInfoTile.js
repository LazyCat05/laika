import React from 'react'
import FlightInfoTile from '../components/FlightInfoTile'

class MissionInfoTile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mission: {}
    }
  }

  render(){
    console.log(this.props)
    return(
      <div className='small-box-border'>
        <h3>Mission: {this.props.name}</h3>
        <div>
          <h4>Total delta-V: {this.props.deltaV.toFixed(2)}</h4>
          <h4>Total Flight Duration: {this.props.duration}</h4>
        </div>
        <FlightInfoTile />
      </div>
    )
  }
}

export default MissionInfoTile;
