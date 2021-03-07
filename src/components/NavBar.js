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
    <Navbar className="navStyle" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => props.history.push({ pathname: "/" })}>
          Issue Tracker
          <span style={{ marginLeft: "10px" }}>
            <strong>Welcome {userData.currentUser[0].firstName}</strong>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink
                to="/"
                exact
                className="main-nav"
                activeClassName="main-nav-active"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/AddIssue"
                exact
                className="main-nav"
                activeClassName="main-nav-active"
              >
                Add Issue
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/TopIssues"
                exact
                className="main-nav"
                activeClassName="main-nav-active"
              >
                Issues Info
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/"
                exact
                onClick={() => dispatch(logoutuser())}
                className="main-nav"
              >
                Sign Out
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar className="navStyle" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => props.history.push({ pathname: "/" })}>
          Issue Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink
                to="/"
                exact
                className="main-nav"
                activeClassName="main-nav-active"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/Login"
                exact
                className="main-nav"
                activeClassName="main-nav-active"
              >
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/Register"
                exact
                className="main-nav"
                activeClassName="main-nav-active"
              >
                Sign Up
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  return <>{user}</>;
};

export default withRouter(Navigation);
