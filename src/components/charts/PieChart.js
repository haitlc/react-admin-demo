// @flow

import React, { Component } from 'react';

import Chart from './Chart';

type Props = {
  data: {},
  width?: number,
  height?: number,
  options?: {}
};

class PieChart extends Component<Props> {
  render() {
    const { data, width, height, options } = this.props;
    
    return <Chart type="pie" data={data} width={width} height={height} options={options} />;
  }
}

export default PieChart;
