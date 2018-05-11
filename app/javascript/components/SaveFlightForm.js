import React from 'react'

class SaveFlightForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flightOrigin: this.props.flight.origin_planet,
      flightDestination: this.props.flight.destination_planet,
      departure_date: this.props.flight.departure_date
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      flightOrigin: this.state.flightOrigin,
      flightDestination: this.state.flightDestination,
      departureDate: this.state.departure_date
    }
    this.props.saveFlight(formPayload)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Save Flight" />
        </form>
      </div>
    )
  }
}

export default SaveFlightForm;
