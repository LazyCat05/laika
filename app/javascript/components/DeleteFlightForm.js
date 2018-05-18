import React from 'react'

class DeleteFlightForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flightId: this.props.flight.id,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      flightId: this.state.flight.id
    }
    this.props.deleteFlight(formPayload)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Delete Flight" />
        </form>
      </div>
    )
  }
}

export default SaveFlightForm;
