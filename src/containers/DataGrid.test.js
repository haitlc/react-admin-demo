import React from 'react';
import { shallow } from 'enzyme';
import DataGrid from './DataGrid';

describe('<DataGrid>', () => {
  it('renders without crashing', () => {
    shallow(<DataGrid
     />);
  });
});
