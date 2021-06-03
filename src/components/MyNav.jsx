import React from 'react'
import {Container, Nav,Navbar} from 'react-bootstrap'


function MyNav() {

    return(
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
    <Container>
    <Navbar.Brand href="#home">Book App</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto text-primary">
        <Nav.Link href="#">Horror</Nav.Link>
        <Nav.Link href="#">SciFi</Nav.Link>
        <Nav.Link href="#">Fantasy</Nav.Link>
        <Nav.Link href="#">Romance</Nav.Link>
      </Nav> 
    </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}
export default MyNav