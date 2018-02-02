import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';
import PieChart from './PieChart';

describe('<PieChart>', () => {
  it('renders without crashing', () => {
    shallow(<PieChart />);
  });

  it('should render a Chart with type="pie"', () => {
    const wrapper = shallow(<PieChart />);
    expect(wrapper.find(Chart).prop('type')).toEqual('pie');
  });
});
