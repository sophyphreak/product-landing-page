import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => (
  <Navbar>
    <NavbarBrand></NavbarBrand>
    <Nav>
      <NavItem>
        <NavLink></NavLink>
      </NavItem>
      <NavItem>
      <NavLink></NavLink>
    </NavItem>
      <NavItem>
      <NavLink></NavLink>
    </NavItem>
    </Nav>
  </Navbar>
);

export default Header;