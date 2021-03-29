import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import { SERVICES } from "../shared/Services";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: SERVICES,
    };
  }

  render() {
    const serviceItem = this.state.services.map((service) => {
      return (
        <Col md="4" className="mt-5" >
          <Card key={service.id} className="h-100">
            <CardBody>
              <CardTitle tag="h5">{service.serviceTopic}</CardTitle>
              <CardText tag="h6">{service.serviceInfo}</CardText>
            </CardBody>
            <Button
              color="primary"
              size="md"
              className="w-50"
            >
              Read More
            </Button>
          </Card>
        </Col>
      );
    });
    return (
      <>
        <Container className="service-container" >
        <h3>Services</h3>
        <hr/>
          <Row >{serviceItem}</Row>
          <hr/>
        </Container>
      </>
    );
  }
}

export default Services;
