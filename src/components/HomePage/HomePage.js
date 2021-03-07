import React from "react";
import { useEffect } from "react";

import { connect } from "react-redux";
import { fetchIssuesAPI } from "../redux/actions/IssueActions";
import HomePageUI from "./HomePageUI";

const HomePage = ({ issuesData, userData, issueClicks, fetchIssues }) => {
  useEffect(() => {
    fetchIssues();
  }, []);
  return <HomePageUI issuesData={issuesData}></HomePageUI>;
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
