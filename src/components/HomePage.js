import React from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import IssuesList from "./IssuesList";
import { fetchIssuesAPI } from "./redux/actions/IssueActions";

const HomePage = ({ issuesData, userData, issueClicks, fetchIssues }) => {
  useEffect(() => {
    fetchIssues();
  }, []);

  const checkUser = userData.currentUser[0];
  const user = userData.currentUser[0] ? (
    <h2>Welcome {checkUser.email}</h2>
  ) : null;
  console.log("State of UserCLICKS", issueClicks);
  return issuesData.loading ? (
    <Spinner animation="border" variant="success" />
  ) : issuesData.error ? (
    <h2>{issuesData.error}</h2>
  ) : (
    <div>
      {user}
      <IssuesList issues={issuesData.issues}></IssuesList>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    issuesData: state.issues,
    userData: state.users,
    issueClicks: state.issueClicks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIssues: () => dispatch(fetchIssuesAPI()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
