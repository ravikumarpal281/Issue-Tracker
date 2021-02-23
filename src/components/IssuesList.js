import React from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/bgimg.jpg";

const IssuesList = ({ issues }) => {
  const issueListToDisplay = issues.map((item) => (
    <Col key={item.id}>
      <Card className="bg-dark mt-3 text-white" style={{ width: "15rem" }}>
        <Card.Img src={bgImage} alt="Card image" style={{ height: "12rem" }} />
        <Card.ImgOverlay>
          <Card.Title className="text-truncate">{item.description}</Card.Title>
          <Card.Subtitle className="mt-3 mb-5 text-muted">
            {item.severity}
          </Card.Subtitle>
          <Button variant="outline-light">View Details</Button>
        </Card.ImgOverlay>
      </Card>
    </Col>
  ));
  return (
    <div>
      <Container>
        <Row>{issueListToDisplay}</Row>
      </Container>
    </div>
  );
};

export default IssuesList;
