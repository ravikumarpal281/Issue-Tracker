import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { connect } from "react-redux";
import { addIssueAPI } from "./redux/actions/IssueActions";
import { Button, Container, Form } from "react-bootstrap";

const AddIssue = (props) => {
  const formik = useFormik({
    initialValues: {
      Description: "",
      Severity: "Critical",
      Status: "Open",
    },
    validationSchema: Yup.object({
      Description: Yup.string()
        .min(2, "Minimum two characters required")
        .max(50, "Max fifty characters")
        .required("Issue Description is required"),
      Severity: Yup.string().required("Severity is required"),
      Status: Yup.string().required("Status is required"),
    }),
    onSubmit: (values) => {
      const addIssue = props.addIssue;
      addIssue({
        description: values.Description,
        severity: values.Severity,
        status: values.Status,
      });
    },
  });

  return (
    <div>
      <Container>
        <h1>Add Issue</h1>
        <Form onSubmit={formik.handleSubmit}>
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