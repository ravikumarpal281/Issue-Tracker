import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserClick } from "../redux/actions/UserClickAction";
import { Button, Card, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { deleteIssueAPI } from "../redux/actions/IssueActions";

const HomePageCustomizedLayout = ({ item, history }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  const viewDetailsHandler = (key) => {
    dispatch(addUserClick(key.id, key.name));
    history.push({ pathname: "/issue/" + key.id });
  };

  const handleEditIssue = (id) => {
    history.push({ pathname: "/editIssue/" + id });
  };

  const handleDeleteIssue = async (id) => {
    if (userData.currentUser[0]) {
      if (window.confirm("Are you sure you want to delete the issue?")) {
        dispatch(deleteIssueAPI(id, history));
      }
    } else {
      history.push({ pathname: "/Login" });
    }
  };

  return (
    <div>
      <Row key={item.id}>
        <Col>
          <Card
            className="bg-dark mt-3 text-white"
            style={{
              width: "100%",
              height: "13rem",
            }}
          >
            <Card.ImgOverlay>
              <Card.Title className="text-truncate">{item.name}</Card.Title>
              <Card.Subtitle className="mt-3 mb-5 text-muted">
                {item.severity}
              </Card.Subtitle>
              <div style={{ float: "right" }}>
                <Button
                  variant="outline-success"
                  style={{ marginRight: "2px" }}
                  onClick={() => viewDetailsHandler(item)}
                >
                  View Details
                </Button>
                <Button
                  variant="outline-warning"
                  style={{ marginRight: "2px" }}
                  onClick={() => handleEditIssue(item.id)}
                >
                  Edit Issue
                </Button>
                <Button
                  variant="outline-danger"
                  style={{ marginTop: "2px" }}
                  onClick={() => handleDeleteIssue(item.id)}
                >
                  Delete Issue
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(HomePageCustomizedLayout);
