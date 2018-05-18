import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class DeltaVChart extends React.Component {
  render() {
    let flightData = [['Flight', 'deltaV']]
    let flights = this.props.flights
    flights.forEach((flight) => {
      let nameDeltaV = []
      nameDeltaV.push(flight.name)
      nameDeltaV.push(flight.delta_v)
      flightData.push(nameDeltaV)
    })

    return (
      <div className='row'>
        <div className='column small-12'>
          <h4>DeltaV</h4>
          <Chart
            chartType="ColumnChart"
            data={flightData}
            options={{legend: 'none', backgroundColor: '#090A11', hAxis: {baselineColor: '#ADD8E6', textStyle: {color: '#ADD8E6'}}, vAxis: {baselineColor: '#ADD8E6', textStyle: {color: '#ADD8E6'}} }}
            graph_id="MissionDeltaVColumns"
            width="20rem"
            height="20rem"
          />
        </div>
      </div>
    );
  }
}

export default DeltaVChart;
