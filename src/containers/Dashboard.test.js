import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('<Dashboard>', () => {
  it('renders without crashing', () => {
    shallow(<Dashboard />);
  });
});
