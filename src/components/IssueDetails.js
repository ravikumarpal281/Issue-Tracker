import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const IssueDetails = (props) => {
  const [state, setstate] = useState({
    id: "",
    description: "",
    severity: "",
    status: "",
  });

  const handleDeleteIssue = () => {
    if (window.confirm("Are you sure you want to delete the issue?")) {
      axios
        .delete(`http://localhost:30001/Issues/${props.match.params.id}`)
        .catch((error) => console.error(error.message));
      props.history.push({ pathname: "/" });
    }
  };

  const handleEditIssue = () => {
    if (window.confirm("Are you sure you want to edit the issue?")) {
      props.history.push({ pathname: "/editIssue/" + props.match.params.id });
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:30001/Issues/${props.match.params.id}`)
      .then((response) => setstate(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div>
      <Container>
        <h1>Issue Details</h1>
        <Row>
          <Col sm={8}>
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
      </Container>
    </div>
  );
};

export default IssueDetails;
