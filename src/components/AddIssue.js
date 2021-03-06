import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Form, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addIssueAPI } from "./redux/actions/IssueActions";
import { Prompt } from "react-router";

const AddIssue = (props) => {
  const initialValues = {
    Name: "",
    Description: "",
    Severity: "Critical",
    Status: "Open",
  };
  const [submittedValues, setSubmittedValues] = useState(initialValues);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      Name: Yup.string()
        .min(2, "Minimum two characters required")
        .max(20, "Max twenty characters can be used for Name")
        .required("Name is required"),
      Description: Yup.string()
        .min(2, "Minimum two characters required")
        .max(50, "Max fifty characters")
        .required("Issue Description is required"),
      Severity: Yup.string().required("Severity is required"),
      Status: Yup.string().required("Status is required"),
    }),
    onSubmit: (values) => {
      const addIssue = props.addIssue;
      setSubmittedValues(values);
      addIssue({
        name: values.Name,
        description: values.Description,
        severity: values.Severity,
        status: values.Status,
      });
      props.history.push({ pathname: "/" });
    },
  });

  return (
    <div>
      <Container>
        <h1>Add Issue</h1>
        <Card className="sign-in-form">
          <Form onSubmit={formik.handleSubmit} className="form-style">
            <Prompt
              when={
                !formik.values.Name ||
                !formik.values.Description ||
                !formik.values.Severity ||
                !formik.values.Status ||
                submittedValues.Name !== formik.values.Name ||
                submittedValues.Description !== formik.values.Description ||
                submittedValues.Severity !== formik.values.Severity ||
                submittedValues.Status !== formik.values.Status
              }
              message="You have unsaved changes, are you sure you want to leave?"
            />
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                onChange={formik.handleChange}
                value={formik.values.Name}
              ></Form.Control>
              {formik.errors.Name && formik.touched.Name && (
                <p style={{ color: "red" }}>{formik.errors.Name}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="Description"
                onChange={formik.handleChange}
                value={formik.values.Description}
              ></Form.Control>
              {formik.errors.Description && formik.touched.Description && (
                <p style={{ color: "red" }}>{formik.errors.Description}</p>
              )}
            </Form.Group>
            <Form.Group>
              <label>
                Severity :
                <select
                  style={{ marginLeft: "5px" }}
                  value={formik.values.Severity}
                  name="Severity"
                  onChange={formik.handleChange}
                >
                  <option value="Critical">Critical</option>
                  <option value="Major">Major</option>
                  <option value="Minor">Minor</option>
                </select>
              </label>
            </Form.Group>
            <Form.Group>
              <label>
                Status :{" "}
                <input
                  style={{ marginLeft: "3px" }}
                  type="radio"
                  name="Status"
                  value="Open"
                  onChange={formik.handleChange}
                  checked={formik.values.Status === "Open"}
                ></input>
                <label style={{ marginLeft: "3px" }}>Open</label>
                <input
                  style={{ marginLeft: "5px" }}
                  type="radio"
                  name="Status"
                  value="In Progress"
                  onChange={formik.handleChange}
                  checked={formik.values.Status === "In Progress"}
                ></input>
                <label style={{ marginLeft: "3px" }}>In Progress</label>
                <input
                  style={{ marginLeft: "5px" }}
                  type="radio"
                  name="Status"
                  value="Closed"
                  onChange={formik.handleChange}
                  checked={formik.values.Status === "Closed"}
                ></input>
                <label style={{ marginLeft: "3px" }}>Closed</label>
              </label>
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIssue: (issueObj) => dispatch(addIssueAPI(issueObj)),
  };
};
export default connect(null, mapDispatchToProps)(AddIssue);
