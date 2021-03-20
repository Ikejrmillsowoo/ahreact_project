import React, { useState } from 'react';
import { Container, Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
  

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="fixed-top" color="dark" light expand="md">
        <Container>
          <NavbarBrand href="/" className="p-2">
            <img
              src="/assets/images/accesshealth-mini-logo.jpg"
              alt="Access Health"
              className="img-fluid rounded-circle"
              width="50"
            />
          </NavbarBrand>
          <h4>
            <span>A</span>ccess<span>H</span>ealth
          </h4>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav navbar className="text-center">
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/aboutus">About Us</Link>
              </NavItem>
              <NavItem>
                <Link to="/services">Services</Link>
              </NavItem>
              <NavItem>
                <Link to="/messages">Messages</Link>
              </NavItem>
              <NavItem>
                <Link to="/contactus">Contact Us</Link>
              </NavItem>
              <NavItem>
                <Link to="/signin">Log In</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}