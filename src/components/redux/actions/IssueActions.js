import {
  FETCH_ISSUES_ERROR,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
} from "../Constants";

import axios from "axios";

export const fetchIssues = () => {
  return {
    type: FETCH_ISSUES_REQUEST,
  };
};

export const fetchIssuesSuccess = (payload) => {
  return {
    type: FETCH_ISSUES_SUCCESS,
    payload: payload,
  };
};

export const fetchIssuesError = (error) => {
  return {
    type: FETCH_ISSUES_ERROR,
    payload: error,
  };
};

export const fetchIssuesAPI = () => {
  return (dispatch) => {
    dispatch(fetchIssues());
    axios
      .get("http://localhost:30001/Issues")
      .then((response) => {
        dispatch(fetchIssuesSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchIssuesError(err.message));
      });
  };
};
