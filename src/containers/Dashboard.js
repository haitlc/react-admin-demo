// @flow

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';

type Props = {};

class Dashboard extends Component<Props> {
  lineSettings: any;

  constructor() {
    super();

    this.lineSettings = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'QMH',
            data: [12, 19, 6, 5, 8, 10, 10, 12, 15, 22, 20, 18],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1
          },
          {
            label: 'PWH',
            data: [7, 10, 16, 15, 18, 10, 10, 12, 15, 21, 22, 19],
            borderColor: 'rgba(254, 122, 135, 1)',
            backgroundColor: 'rgba(254, 122, 135, 0.2)',
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: '# of Requests'
        }
      }
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <LineChart data={this.lineSettings.data} options={this.lineSettings.options} />
          </Col>
          <Col xs={12} md={6}>
            <BarChart data={this.lineSettings.data} options={this.lineSettings.options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
