import React from 'react';
import { shallow } from 'enzyme';
import LineChart from './LineChart';
import Chart from './Chart';

describe('<LineChart>', () => {
  it('renders without crashing', () => {
    shallow(<LineChart />);
  });

  it('should render a Chart with type="line"', () => {
    const wrapper = shallow(<LineChart />);
    expect(wrapper.find(Chart).prop('type')).toEqual('line');
  });
});
