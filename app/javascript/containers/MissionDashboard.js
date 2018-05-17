import React from 'react'
import MissionInfoTile from './MissionInfoTile'

class MissionDashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      missions: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/missions')
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON)
        this.setState({
          missions: responseJSON.missions
        });
      })
  }

  render(){
    let missionTiles = this.state.missions.map(mission => {
      console.log(mission)
      return(
        <MissionInfoTile
          key={mission.id}
          name={mission.name}
          deltaV={mission.total_delta_v}
          duration={mission.total_mission_duration}
          flights={mission.flights}
        />
      )
    })
    console.log(this.state.missions)
    return(
      <div>
        <h2>Mission Dashboard</h2>
        <div>
          {missionTiles}
        </div>
      </div>
    )
  }
}

export default MissionDashboard;
