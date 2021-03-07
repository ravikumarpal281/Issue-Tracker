import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useState } from "react";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import { registerUserAPI } from "./redux/actions/UserActions";
import { connect } from "react-redux";
import { Prompt } from "react-router";

const SignUp = ({ registerUser, history }) => {
  const initialValue = {
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    Location: "",
    MobileNumber: "",
  };
  const [submittedValues, setsubmittedValues] = useState(initialValue);
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: Yup.object({
      Email: Yup.string().email().required("Email is required"),
      Password: Yup.string().required("Password is required"),
      FirstName: Yup.string().required("First Name is required"),
      LastName: Yup.string().required("Last Name is required"),
      Location: Yup.string().required("Location is required"),
      MobileNumber: Yup.string().required("Mobile number is required"),
    }),
    onSubmit: (values) => {
      setsubmittedValues(values);
      registerUser({
        email: values.Email,
        password: values.Password,
        firstName: values.FirstName,
        lastName: values.LastName,
        location: values.Location,
        mobileNumber: values.MobileNumber,
      });
      alert(
        "User Registration Successful. Please login with the registered Username"
      );
      history.push({ pathname: "/Login" });
    },
  });

  return (
    <div>
      <Container>
        <h1>Sign Up</h1>
        <Card className="sign-in-form">
          <Row>
            <Col sm={8}>
              <Form onSubmit={formik.handleSubmit} className="form-style">
                <Prompt
                  when={
                    !formik.values.Email ||
                    !formik.values.Password ||
                    !formik.values.FirstName ||
                    !formik.values.LastName ||
                    !formik.values.Location ||
                    !formik.values.MobileNumber ||
                    submittedValues.Email !== formik.values.Email ||
                    submittedValues.Password !== formik.values.Password ||
                    submittedValues.FirstName !== formik.values.FirstName ||
                    submittedValues.LastName !== formik.values.LastName ||
                    submittedValues.Location !== formik.values.Location ||
                    submittedValues.MobileNumber !== formik.values.MobileNumber
                  }
                  message="You have unsaved changes, are you sure you want to leave?"
                />
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

                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="FirstName"
                    onChange={formik.handleChange}
                    value={formik.values.FirstName}
                  ></Form.Control>
                  {formik.errors.FirstName && formik.touched.FirstName && (
                    <p style={{ color: "red" }}>{formik.errors.FirstName}</p>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="LastName"
                    onChange={formik.handleChange}
                    value={formik.values.LastName}
                  ></Form.Control>
                  {formik.errors.LastName && formik.touched.LastName && (
                    <p style={{ color: "red" }}>{formik.errors.LastName}</p>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="Location"
                    onChange={formik.handleChange}
                    value={formik.values.Location}
                  ></Form.Control>
                  {formik.errors.Location && formik.touched.Location && (
                    <p style={{ color: "red" }}>{formik.errors.Location}</p>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="MobileNumber"
                    onChange={formik.handleChange}
                    value={formik.values.MobileNumber}
                  ></Form.Control>
                  {formik.errors.MobileNumber &&
                    formik.touched.MobileNumber && (
                      <p style={{ color: "red" }}>
                        {formik.errors.MobileNumber}
                      </p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (userDetails) => dispatch(registerUserAPI(userDetails)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
