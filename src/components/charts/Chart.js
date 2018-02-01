// @flow

import React, { Component } from 'react';
import Chartjs from 'chart.js';

type Props = {
  type: string,
  data: any,
  options?: any,
  height?: number,
  width?: number
};

class Chart extends Component<Props> {
  element: any;

  componentDidMount() {
    this.renderChart();
  }

  renderChart() {
    const { type, data, options } = this.props;
    const node = this.element;

    new Chartjs(node, {
      type,
      data,
      options
    });
  }

  render() {
    const { height, width } = this.props;

    return <canvas ref={el => (this.element = el)} height={height} width={width} />;
  }
}

export default Chart;
