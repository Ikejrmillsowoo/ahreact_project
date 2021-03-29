import React, { Component } from 'react';
import { Form, FormGroup, Button, Label, Input, Container, Row, Col } from 'reactstrap';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name
        const value = target.value;
         

        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state))
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    


    render() {
        return (
          <div className="container p-5">
            <div className="contact-header text-center">
              <h1>CONTACT US</h1>
            </div>
            <div className="contact-subheader">
              <h3 className="text-center">Stay in Touch</h3>
            </div>
            <Container>
              <hr />
              <Row>
                <Col md={6}>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label className="labelFonts" htmlFor="name">
                        Full name
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="labelFonts" htmlFor="email">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="labelFonts" htmlFor="message">
                        Message
                      </Label>
                      <Input
                        type="textarea"
                        name="message"
                        id="message"
                        rows="5"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <Button color="primary">Send</Button>
                  </Form>
                </Col>
                <Col md={6} className="mt-5 text-center">
                  <div className="mb-4">
                    <h5>
                      <i className="fa fa-map-marker fa-lg">Bear Delaware </i>
                    </h5>
                  </div>
                  <div className="mb-4">
                    <h5>
                      <i className="fa fa-phone fa-lg">302-565-4455</i>
                    </h5>
                  </div>
                  <div className="mb-4">
                    <h5>
                      <i className="fa fa-envelope fa-lg">
                        accesshealth@mail.com
                      </i>
                    </h5>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={12} className="mx-auto h2 text-center socialIcons">
                  <i className="fa fa-instagram fa-lg p-2"></i>
                  <i className="fa fa-facebook fa-lg p-2"></i>
                  <i className="fa fa-twitter fa-lg p-2"></i>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}