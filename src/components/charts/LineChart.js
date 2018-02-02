// @flow

import React, { Component } from 'react';

import Chart from './Chart';

type Props = {
  data: {},
  width?: number,
  height?: number,
  options?: {}
};

class LineChart extends Component<Props> {
  render() {
    const { data, width, height, options } = this.props;
    
    return <Chart type="line" data={data} width={width} height={height} options={options} />;
  }
}

export default LineChart;
