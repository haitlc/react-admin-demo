// @flow

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { LineChart, BarChart, PieChart } from '../components/charts';

type Props = {};

class Dashboard extends Component<Props> {
  lineSettings: any;
  pieChartSettings: any;

  constructor() {
    super();

    this.lineSettings = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'QMH',
            data: [12, 19, 6, 10, 8, 10, 10, 12, 15, 22, 20, 18],
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

    this.pieChartSettings = {
      data: {
        labels: ['1.0.0', '1.1.0', '2.0.0'],
        datasets: [
          {
            // label: 'App Versions',
            data: [12, 19, 6],
            backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
            borderColor: 'rgba(255,255,255,1)',
            borderWidth: 2
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'App Version'
        }
      }
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6} lg={12}>
            <LineChart data={this.lineSettings.data} options={this.lineSettings.options} />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <BarChart data={this.lineSettings.data} options={this.lineSettings.options} />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <PieChart data={this.pieChartSettings.data} options={this.pieChartSettings.options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
