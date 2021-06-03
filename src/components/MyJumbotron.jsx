import React from "react";
import { Container, Jumbotron, Form } from "react-bootstrap";

const MyJumbotron = (props) => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          molestiae ullam facere placeat consequatur soluta!
        </p>
        <Form>
          <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Search for books..." style={{ width: '18rem', margin:'auto' }} />
          </Form.Group>
        </Form>
      </Container>
    </Jumbotron>
  );
};
export default MyJumbotron;
