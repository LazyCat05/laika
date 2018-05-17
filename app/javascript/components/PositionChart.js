import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class PositionChart extends React.Component {
  render() {
    let origin = this.props.origin
    let destination = this.props.destination
    let graphId = `positions-flight-${this.props.flightId}`
    let originCoordinates = [this.props.originCoordinates[0], this.props.originCoordinates[1], origin]
    let destinationCoordinates = [this.props.destinationCoordinates[0], this.props.destinationCoordinates[1], destination]
    let gridSize = 0
    let gridCoordinates = [this.props.originCoordinates[0], this.props.originCoordinates[1], this.props.destinationCoordinates[0], this.props.destinationCoordinates[1]]
    gridCoordinates.forEach((coordinate) =>{
      let coord = Math.abs(coordinate)
      if (gridSize < coord) {
        gridSize = coord
      }
    })
    gridSize = (gridSize).toFixed(2)
    let positionData = [['X', 'Y', {role: 'annotation'}], [0,0, 'Sun'], originCoordinates, destinationCoordinates]


    let options={
     legend: 'none',
     backgroundColor: '#090A11',
     hAxis: {baselineColor: '#ADD8E6', textStyle: {color: '#ADD8E6'}, minValue: -gridSize, maxValue: gridSize},
     vAxis: {baselineColor: '#ADD8E6', textStyle: {color: '#ADD8E6'}, minValue: -gridSize, maxValue: gridSize}
    }
    return (
      <div>
        <div>
          <Chart
            chartType="ScatterChart"
            data={positionData}
            options={options}
            graph_id={graphId}
            width="20rem"
            height="20rem"
          />
        </div>
      </div>
    );
  }
}

export default PositionChart;
