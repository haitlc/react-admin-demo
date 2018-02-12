import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';

// this ChartJS will failed to run in unit test, need to mock that out
jest.mock('chart.js');

describe('<Chart>', () => {
  it('renders without crashing', () => {
    shallow(<Chart />);
  });

  it('destroys chartjs instance when unmounted', () => {
    const destroy = jest.fn();
    class MockChart extends Chart {
      componentWillUnmount() {
        this.chartInstance = { destroy };
        super.componentWillUnmount();
      }
    }

    const wrapper = shallow(<MockChart />);
    wrapper.unmount();

    expect(destroy.mock.calls.length).toBe(1);
  });
});
