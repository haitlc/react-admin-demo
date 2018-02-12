import React from 'react';
import { mount } from 'enzyme';
import DataGrid from './DataGrid';

describe('<DataGrid>', () => {
  it('renders without crashing', () => {
    mount(<DataGrid />);
  });
});
