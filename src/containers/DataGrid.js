import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Table, Badge, Pagination } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import bg from '../images/bg.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FadeIn = styled(Grid)`
  animation: ${fadeIn} 0.5s;
`;

const ColorBadge = styled(Badge)`
  background: ${props => {
    switch (props.color) {
      case 'success':
        return '#4dbd74';
      case 'danger':
        return '#f86c6b';
      case 'secondary':
        return '#a4b7c1';
      case 'warning':
        return '#ffc107';
      default:
        return null;
    }
  }};
`;

const StyledPanelHeading = styled(Panel.Heading)`
  padding: 0;
  margin: 0;
  height: 200px;
  overflow: hidden;
`;

class DataGrid extends Component {
  headers = ['User', 'Date', 'Role', 'Status'];
  users = [
    {
      name: 'Samppa Nori',
      date: '2012/01/01',
      role: 'Member',
      status: 'Active',
      statusColor: 'success'
    },
    {
      name: 'Estavan Lykos',
      date: '2012/02/01',
      role: 'Staff',
      status: 'Banned',
      statusColor: 'danger'
    },
    {
      name: 'Chetan Mohamed',
      date: '2012/03/01',
      role: 'Admin',
      status: 'Inactive',
      statusColor: 'secondary'
    },
    {
      name: 'Derick Maximinus',
      date: '2012/04/01',
      role: 'Member',
      status: 'Pending',
      statusColor: 'warning'
    },
    {
      name: 'Friderik Dávid',
      date: '2012/05/21',
      role: 'Staff',
      status: 'Default'
    }
  ];

  renderTableBody = () => (
    <tbody>
      {this.users.map((user, i) => {
        return (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.date}</td>
            <td>{user.role}</td>
            <td>
              <ColorBadge color={user.statusColor}>{user.status}</ColorBadge>
            </td>
          </tr>
        );
      })}
    </tbody>
  );

  renderTableHeader = () => (
    <thead>
      <tr>{this.headers.map((header, i) => <th key={i}>{header}</th>)}</tr>
    </thead>
  );

  render() {
    return (
      <FadeIn>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Panel>
              <StyledPanelHeading>
                <img width="100%" src={bg} alt="cap" />
              </StyledPanelHeading>
              <Panel.Body>
                <Table responsive hover striped>
                  {this.renderTableHeader()}
                  {this.renderTableBody()}
                </Table>
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Panel>
              <Panel.Heading>Striped Table</Panel.Heading>
              <Panel.Body>
                <Table responsive striped bordered hover>
                  {this.renderTableHeader()}
                  {this.renderTableBody()}
                </Table>
                <Pagination style={{ display: 'flex', justifyContent: 'center' }}>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>4</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Next />
                  <Pagination.Item>20</Pagination.Item>
                  <Pagination.Last />
                </Pagination>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </FadeIn>
    );
  }
}

export default DataGrid;
