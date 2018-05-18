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
        arrivalDate: '',
        missionId: this.props.missionId
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
      console.log(this.state.missionId)
      let formPayload = {
        flightOrigin: this.state.flightOrigin,
        flightDestination: this.state.flightDestination,
        departureDate: this.state.departureDate,
        missionId: this.state.missionId
      }
      this.props.addNewFlight(formPayload)
    }

    render() {
      return(
        <div className="small-box-border">
          <h3>New Flight</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <PlanetSelectField
                  label="Origin"
                  name="flightOrigin"
                  content={this.state.flightOrigin}
                  handleInput={this.handleOriginSelection}/>
              </div>
              <div>
                <PlanetSelectField
                  label="Destination"
                  name="flightDestination"
                  content={this.state.flightDestination}
                  handleInput={this.handleDestinationSelection}/>
              </div>
              <div>
                  <DateField
                    label="Departure Date"
                    name="departureDate"
                    content={this.state.departureDate}
                    handleInput={this.handleDepartureDateSelection}/>
              </div>
            </div>
            <div>
              <input type="submit" value="Calculate" />
            </div>
          </form>
        </div>
      )
    }
  }

export default FlightForm;
