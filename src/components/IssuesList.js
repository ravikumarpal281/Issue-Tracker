import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import bgImage from "../assets/images/bgimg.jpg";

const IssuesList = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };
  const issueListToDisplay = props.issues
    .filter((val) => {
      if (searchText === "") {
        return val;
      } else if (
        val.description.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return val;
      }
    })
    .map((item) => (
      <Col key={item.id}>
        <Card className="bg-dark mt-3 text-white" style={{ width: "15rem" }}>
          <Card.Img
            src={bgImage}
            alt="Card image"
            style={{ height: "12rem" }}
          />
          <Card.ImgOverlay>
            <Card.Title className="text-truncate">
              {item.description}
            </Card.Title>
            <Card.Subtitle className="mt-3 mb-5 text-muted">
              {item.severity}
            </Card.Subtitle>
            <Button
              variant="outline-light"
              onClick={() =>
                props.history.push({ pathname: "/issue/" + item.id })
              }
            >
              View Details
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Col>
    ));
  return (
    <div>
      <Container>
        <input
          type="text"
          style={{ width: "100%", marginTop: "10px" }}
          placeholder="Search Issues"
          value={searchText}
          onChange={handleSearchText}
        ></input>
        <Row>{issueListToDisplay}</Row>
      </Container>
    </div>
  );
};

export default withRouter(IssuesList);
