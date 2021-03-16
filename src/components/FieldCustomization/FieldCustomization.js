import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomField } from "../redux/actions/UserActions";

const FieldCustomization = (props) => {
  const userData = useSelector((state) => state.users);
  let fieldRow = null;
  const dispatch = useDispatch();
  const handleEditIssue = (id) => {
    props.history.push({ pathname: "/FieldEdit/" + id });
  };

  const handleDeleteIssue = (id) => {
    if (userData.currentUser[0]) {
      if (
        window.confirm(
          "Are you sure you want to delete the Field Customization?"
        )
      ) {
        dispatch(updateCustomField(id, ["name"], props.history));
      }
    } else {
      props.history.push({ pathname: "/Login" });
    }
  };

  if (userData.currentUser[0]) {
    const customFieldsMapping = userData.currentUser[0].customFields.map(
      (field) => (
        <Card.Subtitle
          key={field}
          className="mt-3 mb-2  text-muted"
          style={{ textTransform: "capitalize" }}
        >
          <strong style={{ color: "lightslategrey" }}>{field}</strong>
        </Card.Subtitle>
      )
    );
    fieldRow = (
      <div>
        <Container>
          <Row>
            <Col>
              <Card
                className="bg-dark mt-3 text-light"
                style={{
                  width: "100%",
                  height: "15rem",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-truncate">
                    Current Fields Visible for Issues In Home Screen
                  </Card.Title>
                  {customFieldsMapping}
                  <div style={{ float: "right" }}>
                    <Button
                      variant="outline-warning"
                      style={{ marginRight: "2px" }}
                      onClick={() =>
                        handleEditIssue(userData.currentUser[0].id)
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      style={{ marginTop: "2px", marginLeft: "2px" }}
                      onClick={() =>
                        handleDeleteIssue(userData.currentUser[0].id)
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    fieldRow = (
      <div>
        <h1>User Not Logged In</h1>
      </div>
    );
  }
  return fieldRow;
};

export default FieldCustomization;
