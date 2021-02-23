import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <Navbar className="navStyle" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Issue Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/AddIssue">Add Issue</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Login">Login</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Register">Sign Up</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navigation;
