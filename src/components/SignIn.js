import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import { loginUserAPI } from "./redux/actions/UserActions";
import { connect } from "react-redux";

const SignIn = (props) => {
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Email: Yup.string().email().required("Email is required"),
      Password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      props.loginUser(values);
      props.history.push({ pathname: "/" });
    },
  });

  return (
    <div className="Div_signIn">
      <Container>
        <h1>Sign In</h1>
        <Card className="sign-in-form">
          <Row>
            <Col sm={8}>
              <Form onSubmit={formik.handleSubmit} className="form-style">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="Email"
                    onChange={formik.handleChange}
                    value={formik.values.Email}
                  ></Form.Control>
                  {formik.errors.Email && formik.touched.Email && (
                    <p style={{ color: "red" }}>{formik.errors.Email}</p>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}
                  ></Form.Control>
                  {formik.errors.Password && formik.touched.Password && (
                    <p style={{ color: "red" }}>{formik.errors.Password}</p>
                  )}
                </Form.Group>

                <Button type="submit" style={{ width: "100%" }}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
