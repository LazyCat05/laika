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
    return(
      <div className='small-box-border'>
        <h3>I'm the Mission Info Tile!</h3>
        <FlightInfoTile />
      </div>
    )
  }
}

export default MissionInfoTile;
