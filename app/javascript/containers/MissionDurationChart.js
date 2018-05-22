import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class MissionDurationChart extends React.Component {
  render() {
    let flightData = [['Flight', 'Time of Flight']]
    let flights = this.props.flights
    flights.forEach((flight) => {
      let nameDuration = []
      nameDuration.push(flight.name)
      nameDuration.push(flight.time_of_flight)
      flightData.push(nameDuration)
    })

    return (
        <div className='column small-12 small-box-border'>
          <h4>Mission Duration</h4>
          <div>
            <Chart
              chartType="ColumnChart"
              data={flightData}
              options={{legend: 'none', backgroundColor: '#090A11', hAxis: {baselineColor: '#ADD8E6', textStyle: {color: '#ADD8E6'}}, vAxis: {baselineColor: '#ADD8E6', textStyle: {color: '#ADD8E6'}} }}
              graph_id="MissionDurationColumns"
              width="20rem"
              height="20rem"
            />
          </div>
        </div>
    );
  }
}

export default MissionDurationChart;
