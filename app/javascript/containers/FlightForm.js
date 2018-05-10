import React from 'react'
import PlanetSelectField from '../components/PlanetSelectField'
import DateField from '../components/DateField'

class FlightForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        flightOrigin: '',
        flightDestination: '',
        departureDate: '',
        arrivalDate: ''
      }
      this.handleOriginSelection = this.handleOriginSelection.bind(this)
      this.handleDestinationSelection = this.handleDestinationSelection.bind(this)
      this.handleDepartureDateSelection = this.handleDepartureDateSelection.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOriginSelection(event) {
      this.setState({ flightOrigin: event.target.value })
    }

    handleDestinationSelection(event) {
      this.setState({ flightDestination: event.target.value })
    }

    handleDepartureDateSelection(event) {
      this.setState({ departureDate: event.target.value })
    }

    handleSubmit(event) {
      event.preventDefault()
      let formPayload = {
        flightOrigin: this.state.flightOrigin,
        flightDestination: this.state.flightDestination,
        departureDate: this.state.departureDate
      }
      this.props.addNewFlight(formPayload)
    }

    render() {
      return(
        <div>
          <h3>New Flight</h3>
          <form onSubmit={this.handleSubmit}>
            <PlanetSelectField
              label="Origin"
              name="flightOrigin"
              content={this.state.flightOrigin}
              handleInput={this.handleOriginSelection}/>
            <PlanetSelectField
              label="Destination"
              name="flightDestination"
              content={this.state.flightDestination}
              handleInput={this.handleDestinationSelection}/>
            <DateField
              label="Departure Date"
              name="departureDate"
              content={this.state.departureDate}
              handleInput={this.handleDepartureDateSelection}/>
              <input type="submit" value="Calculate" />
          </form>
        </div>
      )
    }
  }

export default FlightForm;
