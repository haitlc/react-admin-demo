import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background: white;
  top: 0px;
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const StyledBrand = styled(Navbar.Brand)`
  color: #36a2cd !important;
  font-weight: bold;
`;



class Header extends Component {
  menuItems: Array<> = [
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

  render() {
    return (
      <StyledNavbar collapseOnSelect>
        <Navbar.Header>
          <StyledBrand>Admin Demo</StyledBrand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.menuItems.map((item, i) => (
              <NavItem eventKey={i}>
                <NavLink to={item.url}>
                  <div style={{ width: '100%' }}>{item.title}</div>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    );
  }
}

export default Header;
