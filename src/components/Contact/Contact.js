import React from 'react';
import { Container, Form, FormControl, InputGroup } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
          <Container>
            <h1 className="text-center my-3">Get Us Through Contact</h1>
          <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Your Name"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Mail Address"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text>Course Range</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>

  <InputGroup>
    <InputGroup.Text>Any Special Note</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
          </Container>
        </div>
    );
};

export default Contact;