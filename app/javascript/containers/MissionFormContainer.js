import React from 'react'
import MissionForm from './MissionForm'

class MissionFormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      mission: null
    }
    this.addNewMission = this.addNewMission.bind(this)
  }
  addNewMission(formPayload) {
    fetch('api/v1/missions.json', {
      credentials: 'same-origin',
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if(response.ok) {
        return repsonse;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(responseJSON => {
      this.setState({ mission: responseJSON.mission })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){
    return(
    <div>
      <MissionForm
        addNewMission = {this.addNewMission}
      />
    </div>
  )
  }
}

export default MissionFormContainer;
