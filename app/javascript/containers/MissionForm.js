import React from 'react'
import NameField from '../components/NameField'

class MissionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      missionName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.PreventDefault()
    let formPayload = {
      missionName: this.state.missionName
    }
    this.props.addNewMission(formPayload)
  }

  render(){
    return(
      <div>
        <h3>New Mission</h3>
        <form onSubmit={this.handleSubmit}>
          <NameField
            label="Mission Name"
          />
          <input type='submit' value='New Mission' />
        </form>
      </div>
    )
  }
}

export default MissionForm;
