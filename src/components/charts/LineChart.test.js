import React from 'react';
import { shallow } from 'enzyme';
import LineChart from './LineChart';

describe('<LineChart>', () => {
  it('renders without crashing', () => {
    shallow(<LineChart />);
  });
});
