import React from 'react';
import { shallow } from 'enzyme';
import Forms from './Forms';

describe('<Forms>', () => {
  it('renders without crashing', () => {
    shallow(<Forms />);
  });
});
