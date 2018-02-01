import React from 'react';
import { shallow } from 'enzyme';
import BarChart from './BarChart';

describe('<BarChart>', () => {
  it('renders without crashing', () => {
    shallow(<BarChart />);
  });
});
