import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background: white;
  top: 0px;
  position: fixed;
  width: 100%;
  z-index: 9999;
  border-radius: 0;
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
      title: 'Forms',
      url: '/forms'
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
              <LinkContainer to={item.url} key={i}>
                <NavItem eventKey={i} key={i}>
                  {item.title}
                </NavItem>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    );
  }
}

export default Header;
