import React from 'react'
import MissionInfoTile from './MissionInfoTile'

class MissionDashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      missions: []
    }
  }

  render(){
    return(
      <div>
        <h2>Mission Dashboard</h2>
        <MissionInfoTile />
      </div>
    )
  }
}

export default MissionDashboard;
