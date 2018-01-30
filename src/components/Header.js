import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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

const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard'
  },
  {
    title: 'Data Grid',
    url: '/data-grid'
  },
  {
    title: 'Form',
    url: '/form'
  }
];

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
            {menuItems.map((item, i) => (
              <NavItem eventKey={i}>
                <NavLink to={item.url}>{item.title}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    );
  }
}

export default Header;
