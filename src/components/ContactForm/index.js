import React from "react";

import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";

import "./index.scss";

const ContactForm = () => {
  return (
    <Form autoComplete="off">
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>
            <FloatingLabel label="Name" controlId="formName">
              <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
          </Col>
          <Col sm={12} md={6}>
            <FloatingLabel label="Email" controlId="formEmail">
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel label="Subject" controlId="formSubject">
              <Form.Control type="text" placeholder="Subject" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel label="Enviame un mensaje" controlId="formMessage">
              <Form.Control className="message" as="textarea" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>ENVIAR</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default ContactForm;
