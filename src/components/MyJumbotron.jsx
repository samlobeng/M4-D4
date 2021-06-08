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
      </Container>
    </Jumbotron>
  );
};
export default MyJumbotron;
