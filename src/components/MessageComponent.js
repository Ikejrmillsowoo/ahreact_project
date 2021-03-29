import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Message() {
    return (
      <div>
        <div className="container message-container">
          <h2>Submit your question below...</h2>
          <Form>
            <FormGroup>
              <Label className="labelFonts" htmlFor="fullName">
                FullName:
              </Label>
              <Input type="text" id="fullName" name="fullName" />
            </FormGroup>
            <FormGroup>
              <Label className="labelFonts" htmlFor="email">
                Email:
              </Label>
              <Input type="email" id="email" name="email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="services" className="mr-2 labelFonts">
                Service:
              </Label>
              <select type="text" id="services" name="services">
                <option>Covid-19</option>
                <option>Lab Results</option>
                <option>Children's Health</option>
                <option>Mental Health</option>
                <option>Respiratory Care</option>
                <option>Physical Therapy</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Label className="labelFonts" htmlFor="message">
                Message:
              </Label>
              <Input type="textarea" id="message" name="message" rows="10" />
            </FormGroup>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
}
