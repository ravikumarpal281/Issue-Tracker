import React from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import IssuesList from "./IssuesList";
import { fetchIssuesAPI } from "./redux/actions/IssueActions";

const HomePage = ({ issuesData, fetchIssues }) => {
  useEffect(() => {
    fetchIssues();
  }, []);
  console.log("ISSUE LIST", issuesData.issues);
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

const mapStateToProps = (state) => {
  return {
    issuesData: state.issues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIssues: () => dispatch(fetchIssuesAPI()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
