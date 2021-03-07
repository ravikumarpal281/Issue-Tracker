import React from "react";
import IssuesList from "../IssuesList";
import { Spinner } from "react-bootstrap";

const HomePageUI = ({ issuesData }) => {
  return issuesData.loading ? (
    <Spinner animation="border" variant="success" />
  ) : issuesData.error ? (
    <h2>{issuesData.error}</h2>
  ) : (
    <div>
      <IssuesList issues={issuesData.issues}></IssuesList>
    </div>
  );
};

export default HomePageUI;
