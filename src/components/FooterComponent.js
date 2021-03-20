import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink
} from "reactstrap";




export default class Footer extends Component {
    render() {
        return (
          <footer className="mt-5 bg-dark text-light">
            <Container className="pt-2">
              <Row className="text-center">
                <Col xs={3}>
                  <h5>Links</h5>
                  <Nav className="mx-auto" navbar>
                    <NavItem>
                      <NavLink href="/">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Login</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col xs={5} className="m-auto h2">
                  <i className="fa fa-instagram fa-lg p-2"></i>
                  <i className="fa fa-facebook fa-lg p-2"></i>
                  <i className="fa fa-twitter fa-lg p-2"></i>
                </Col>
                <Col className="m-auto">
                  <h4 xs={3} className="text-center">
                    <span>A</span>ccess<span>H</span>ealth
                  </h4>
                </Col>
              </Row>
              <Row className="text-center">
                <Col xs={12}>&#169; 2021 Access Health</Col>
              </Row>
            </Container>
          </footer>
        );
    }
}