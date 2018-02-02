import React from 'react';
import { shallow } from 'enzyme';
import BarChart from './BarChart';
import Chart from './Chart';

describe('<BarChart>', () => {
  it('renders without crashing', () => {
    shallow(<BarChart />);
  });

  it('should render a Chart with type="bar"', () => {
    const wrapper = shallow(<BarChart />);
    expect(wrapper.find(Chart).prop('type')).toEqual('bar');
  });
});
