import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNav = styled(Nav)`
  position: fixed;
  width: 20vw;
  height: 100%;
`;

class Sidebar extends Component {
  handleSelect = () => {};

  render() {
    return (
      <StyledNav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="#">
          Dashboard
        </NavItem>
        <NavItem eventKey={2}>List</NavItem>
        <NavItem eventKey={3} disabled>
          Buttons
        </NavItem>
      </StyledNav>
    );
  }
}

export default Sidebar;
