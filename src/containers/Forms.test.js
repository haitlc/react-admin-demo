import React from 'react';
import { shallow, mount } from 'enzyme';
import Forms from './Forms';

describe('<Forms>', () => {
  it('renders without crashing', () => {
    mount(<Forms />);
  });
});
