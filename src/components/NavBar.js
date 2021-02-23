import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutuser } from "./redux/actions/UserActions";

const Navigation = (props) => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const checkUser = userData.currentUser[0];
  const user = userData.currentUser[0] ? (
    <Nav.Link>
      <NavLink to="/" onClick={() => dispatch(logoutuser())}>
        Sign Out
      </NavLink>
    </Nav.Link>
  ) : (
    <Nav.Link>
      <NavLink to="/Login">Login/Sign Up</NavLink>
    </Nav.Link>
  );
  return (
    <Navbar className="navStyle" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => props.history.push({ pathname: "/" })}>
          Issue Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/AddIssue">Add Issue</NavLink>
            </Nav.Link>
            {user}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(Navigation);
