import React, { Component } from 'react';
import { Form, FormGroup, Button, Label, Input, FormText } from 'reactstrap';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
       
    }

    handleInputChange(e) {
        const target = e.target;
        const name = target.name
        const value = target.value;
         

        this.setState({
            [name] : value
        })
        console.log(this.state.value);
    }

    


    render() {
        return (
          <>
            <div className="contact-header pt-5">
              <h1>CONTACT</h1>
            </div>
            <div className="contact-subheader">
              <h3>some text</h3>
              <h6>more text and some more</h6>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Form>
                    <FormGroup>
                      <Label for="name">Full name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="message">Message</Label>
                      <Input
                        type="message"
                        name="text"
                        id="message"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <Button>Send</Button>
                  </Form>
                </div>
                <div className="col">
                  <i className="fa fa-map-marker fa-lg">Bear Delaware </i>
                  <i className="fa fa-phone fa-lg">302-565-4455</i>
                  <i className="fa fa-envelope fa-lg">accesshealth@mail.com</i>
                </div>
              </div>
            </div>
          </>
        );
    }
}