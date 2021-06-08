import React from "react";
import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Fantasy from "../data/fantasy.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";
import BookList from "./BookList";

class MyNav extends Component {
  state = {
    selectedCatName: null,
    selectedCategory: null,
  };

  categories = {
    Fantasy: Fantasy,
    Horror: Horror,
    Romance: Romance,
    Scifi: Scifi,
  };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">Book App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {Object.keys(this.categories).map((cat, i) => {
                return (
                  <Nav.Link
                    onClick={() =>
                      this.setState({
                        selectedCategory: this.categories[cat],
                        selectedCatName: cat,
                      })
                    }
                  >
                    {cat}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    );
  }
}
export default MyNav;
