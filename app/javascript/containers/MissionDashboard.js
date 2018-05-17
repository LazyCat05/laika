import React from 'react'
import { Link } from 'react-router'
import MissionInfoTile from './MissionInfoTile'

class MissionDashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      missions: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/missions', {
      credentials: 'same-origin',
      method: 'get',
      headers: { 'Content-Type': 'application/json'}
    })
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
      return(
        <MissionInfoTile
          key={mission.id}
          id={mission.id}
          name={mission.name}
          deltaV={mission.total_delta_v}
          duration={mission.total_mission_duration}
          flights={mission.flights}
        />
      )
    })
    console.log(this.state.missions)
    return(
      <div className='expanded row'>
        <div className='row'>
          <div className='column small-6 small-centered'>
            <h2>Mission Dashboard</h2>
          </div>
          <div>
            <Link to='missions/new'>Add New Mission</Link>
          </div>
        </div>
        <div className='expanded row'>
          {missionTiles}
        </div>
      </div>
    )
  }
}

export default MissionDashboard;
