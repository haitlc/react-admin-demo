import React from 'react';
import { shallow } from 'enzyme';
import Admin from './Admin';

describe('<Admin>', () => {
  it('renders without crashing', () => {
    shallow(<Admin />);
  });
});
