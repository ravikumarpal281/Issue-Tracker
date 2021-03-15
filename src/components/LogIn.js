import React from "react";
import { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { loginUserAPI } from "./redux/actions/UserActions";

const LogIn = (props) => {
  const [state, setstate] = useState({
    Email: "",
    Password: "",
  });
  let loading = false;
  let userNotLoggedIn = null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    loading = true;
    props.loginUser(state);
  };

  const emailOnCHangeHandler = (e) => {
    setstate({
      ...state,
      Email: e.target.value,
    });
  };

  const passwordOnChangeHandler = (e) => {
    setstate({
      ...state,
      Password: e.target.value,
    });
  };
  if (props.userData.currentUser[0]) {
    props.history.push({ pathname: "/" });
  }
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => emailOnCHangeHandler(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => passwordOnChangeHandler(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {loading && <Spinner animation="border" variant="success" />}
          <span>Login</span>
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginDetails) => dispatch(loginUserAPI(loginDetails)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
