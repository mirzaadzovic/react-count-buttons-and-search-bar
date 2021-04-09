import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2/dist/react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    console.log("konstruktor");
    this.state = props.chartData;
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };
  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          options={this.state.options}
          height={100}
        />
        <Line
          data={this.state.chartData}
          options={this.state.options}
          height={100}
        />
        <Pie
          data={this.state.chartData}
          options={this.state.options}
          height={100}
        />
      </div>
    );
  }
}

export default Chart;
