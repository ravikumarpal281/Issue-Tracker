import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const IssueDetails = (props) => {
  console.log("Issue Details PROPS", props);
  const [state, setstate] = useState({
    id: "",
    name: "",
    description: "",
    severity: "",
    status: "",
  });

  const handleDeleteIssue = () => {
    if (window.confirm("Are you sure you want to delete the issue?")) {
      axios
        .delete(`http://localhost:30001/Issues/${props.id.params.id}`)
        .catch((error) => console.error(error.message));
      props.history.push({ pathname: "/" });
    }
  };

  const handleEditIssue = () => {
    if (window.confirm("Are you sure you want to edit the issue?")) {
      console.log("Edit Issue Click", props.id.params.id);
      props.history.push({ pathname: "/editIssue/" + props.id.params.id });
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:30001/Issues/${props.id.params.id}`)
      .then((response) => setstate(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div>
      <Container>
        <h1>Issue Details</h1>
        <Card className="sign-in-form">
          <Row>
            <Col sm={8} className="form-style">
              <p>
                <strong>Name : </strong> {state.name}
              </p>
              <p>
                <strong>Issue Description : </strong> {state.description}
              </p>
              <p>
                <strong>Severity : </strong> {state.severity}
              </p>
              <p>
                <strong>Status : </strong> {state.status}
              </p>
              <Button variant="outline-primary" onClick={handleEditIssue}>
                Edit Issue
              </Button>{" "}
              <Button variant="outline-danger" onClick={handleDeleteIssue}>
                Delete Issue
              </Button>{" "}
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default withRouter(IssueDetails);
