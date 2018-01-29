import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background: white;
`;

const StyledBrand = styled(Navbar.Brand)`
  color: #36a2cd !important;
  font-weight: bold;
`;

const StyledBadge = styled(Badge)`
  background: #f86c6b;
`;

class Header extends Component {
  render() {
    return (
      <StyledNavbar collapseOnSelect>
        <Navbar.Header>
          <StyledBrand>Admin Demo</StyledBrand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Dashboard
            </NavItem>
            <NavItem eventKey={2} href="#">
              Users
            </NavItem>
            <NavItem eventKey={3} href="#">
              Settings
            </NavItem>
          </Nav>
          <Nav pullRight>
            <Navbar.Text eventKey={1} href="#">
              ykc573 <StyledBadge>12</StyledBadge>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    );
  }
}

export default Header;
