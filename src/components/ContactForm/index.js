import React from "react";

import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

import "./index.scss";

const ContactForm = () => {
  return (
    <Form>
      <Row>
        <Col>
          <FloatingLabel label="Name" controlId="formName">
            <Form.Control type="text" placeholder="Name"></Form.Control>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Email" controlId="formEmail">
            <Form.Control type="email" placeholder="Email"></Form.Control>
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel label="Subject" controlId="formSubject">
            <Form.Control type="text" placeholder="Subject"></Form.Control>
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel label="Message" controlId="formMessage">
            <Form.Control
              className="message"
              as="textarea"
              placeholder="Message"
            ></Form.Control>
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>ENVIAR</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
