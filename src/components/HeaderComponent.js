import React, { useState } from 'react';
import {
  Container,
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from 'react-router-dom';


  

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

  return (
    <header>
      <Navbar className="fixed-top headerItem p-3" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img
              src="/assets/images/accesshealth-mini-logo.jpg"
              alt="Access Health"
              className="img-fluid rounded-circle"
              width="75"
            />
          </NavbarBrand>
          <h4>
            <span>A</span>ccess<span>H</span>ealth
          </h4>
          <NavbarToggler className="toggleBar navbar-light" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav navbar className="text-center">
              <NavItem className="m-2">
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem className="m-2">
                <Link to="/aboutus">About</Link>
              </NavItem>
              <NavItem className="m-2">
                <Link to="/services">Services</Link>
              </NavItem>
              <NavItem className="m-2">
                <Link to="/messages">Messages</Link>
              </NavItem>
              <NavItem className="m-2">
                <Link to="/contactus">Contact</Link>
              </NavItem>
              <NavItem className="m-2">
                <Link>
                  <i className="fa fa-sign-in fa-lg" onClick={toggleModal}>
                    Login
                  </i>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Sign In</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label className="labelFonts" htmlFor="username">
                Username:
              </Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup>
              <Label className="labelFonts" htmlFor="password">
                Password:
              </Label>
              <Input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
          </Form>
          <hr />
          <Label className="labelFonts mr-3">Need to sign up?</Label>
          <Button color='primary'>Sign Up</Button>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Log In
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </header>
  );
}