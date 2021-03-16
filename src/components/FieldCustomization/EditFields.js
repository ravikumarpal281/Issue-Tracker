import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomField } from "../redux/actions/UserActions";

const EditFields = (props) => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const allFields = ["name", "severity", "status", "description"];
  const [state, setstate] = useState({
    checkboxes: allFields.reduce(
      (options, option) => ({
        ...options,
        [option]: userData.currentUser[0]
          ? userData.currentUser[0].customFields.some((i) => i === option)
          : false,
      }),
      {}
    ),
  });

  const handleCheckBoxChange = (changeEvent) => {
    const { name } = changeEvent.target;
    setstate((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fieldsChanged = Object.keys(state.checkboxes).filter(
      (checkbox) => state.checkboxes[checkbox]
    );

    if (fieldsChanged.length > 0) {
      dispatch(
        updateCustomField(
          userData.currentUser[0].id,
          fieldsChanged,
          props.history
        )
      );
    } else {
      alert("Please select at least One Field!");
    }
  };

  const createCheckboxes = allFields.map((field) => (
    <Form.Group key={field}>
      <label style={{ marginLeft: "5px", textTransform: "capitalize" }}>
        <input
          type="checkbox"
          name={field}
          style={{ marginRight: "5px" }}
          defaultChecked={
            userData.currentUser[0]
              ? userData.currentUser[0].customFields.some((i) => i === field)
              : false
          }
          onChange={(e) => handleCheckBoxChange(e)}
        ></input>
        <strong>{field}</strong>
      </label>
      <br></br>
    </Form.Group>
  ));

  return (
    <div>
      <Container>
        <h1>Select Fields to Customize Home Screen</h1>
        <Card className="sign-in-form">
          <Form onSubmit={(e) => handleSubmit(e)} className="form-style">
            {createCheckboxes}
            <Button type="submit">Submit</Button>{" "}
            <Button onClick={() => props.history.push({ pathname: "/" })}>
              Cancel
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default EditFields;
