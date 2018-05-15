import React from 'react'

class MissionShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mission: {},
      flights: [],
      errorMessage: ''
    }
  }

  componentDidMount(){
    let missionId = this.props.params.id
    fetch(`/api/v1/missions/${missionId}`)
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
        mission: responseJSON.mission,
        flights: responseJSON.mission.flights
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    console.log(this.state.mission)
    console.log(this.state.flights)
    return(
      <div></div>
    )
  }

}

export default MissionShowContainer;
