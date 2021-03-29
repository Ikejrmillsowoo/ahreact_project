import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink, FormGroup, Form, Modal, ModalBody, ModalHeader, 
Input, Button, ModalFooter, Label} from "reactstrap";






export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupModal: false,
    }

      this.toggleSignUp = this.toggleSignUp.bind(this);
  }


  toggleSignUp() {
    this.setState({
      signupModal: !this.state.signupModal
    })
  }
  

  render() {
    return (
      <footer className="mt-5 bg-dark text-light">
        <Container className="p-2">
          <Row className="text-center">
            <Col xs={6}>
              <h5>Links</h5>
              <Nav className="mx-auto" navbar>
                <NavItem className="footer-nav">
                  <NavLink className="footerItem" href="/">
                    About
                  </NavLink>
                </NavItem>
                <NavItem className="footer-nav">
                  <NavLink className="footerItem" href="/">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem className="footer-nav">
                  <NavLink className="footerItem" onClick={this.toggleSignUp}>
                    Sign Up
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            {/* <Col xs={5} className="m-auto h2 socialIcons">
              <i className="fa fa-instagram fa-lg p-2"></i>
              <i className="fa fa-facebook fa-lg p-2"></i>
              <i className="fa fa-twitter fa-lg p-2"></i>
            </Col> */}
            <Col className="m-auto">
              <h4 xs={6} className="text-center footer-logo">
                <span>A</span>ccess<span>H</span>ealth
              </h4>
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={12} className="footerCopy">
              &#169; 2021 Access Health
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.signupModal} toggle={this.toggleSignUp}>
          <ModalHeader toggle={this.toggleSignUp}>Sign In</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label className="labelFonts" htmlFor="firstName">
                  First Name:
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </FormGroup>
              <FormGroup>
                <Label className="labelFonts" htmlFor="lastName">
                  Last Name:
                </Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </FormGroup>
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
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleSignUp}>
              Log In
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleSignUp}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </footer>
    );
  }
}