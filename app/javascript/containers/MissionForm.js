import React from 'react'
import NameField from '../components/NameField'

class MissionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <h3>New Mission</h3>
        <NameField />
      </div>
    )
  }
}

export default MissionForm;
