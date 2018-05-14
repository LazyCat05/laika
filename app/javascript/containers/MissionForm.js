import React from 'react'
import NameField from '../components/NameField'

class MissionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      missionName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleMissionName = this.handleMissionName.bind(this)
  }

  handleMissionName(event) {
    this.setState({ missionName: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      missionName: this.state.missionName
    }
    this.props.addNewMission(formPayload)
  }

  render(){
    return(
      <div className = 'small-box-border'>
        <h3>New Mission</h3>
        <form onSubmit={this.handleSubmit}>
          <NameField
            label="Mission Name"
            handleInput={this.handleMissionName}
          />
          <input type='submit' value='New Mission' />
        </form>
      </div>
    )
  }
}

export default MissionForm;
