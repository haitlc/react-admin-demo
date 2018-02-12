// @flow

import React, { Component } from 'react';
import Chartjs from 'chart.js';

type Props = {
  type: string,
  data: {},
  options?: {},
  height?: number,
  width?: number
};

class Chart extends Component<Props> {
  element: any;
  chartInstance: any;

  componentDidMount() {
    this.renderChart();
  }

  componentWillUnmount() {
    this.chartInstance.destroy();
  }

  renderChart = () => {
    const { type, data, options } = this.props;
    const node = this.element;

    this.chartInstance = new Chartjs(node, {
      type,
      data,
      options
    });
  };

  setCanvasRef = (el: any) => (this.element = el);

  render() {
    const { height, width } = this.props;

    return <canvas ref={this.setCanvasRef} height={height} width={width} />;
  }
}

export default Chart;
