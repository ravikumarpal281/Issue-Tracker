import {
  ADD_ISSUE_FAILURE,
  ADD_ISSUE_REQUEST,
  ADD_ISSUE_SUCCESS,
  ADD_USER_CLICK,
  FETCH_ISSUES_ERROR,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
  DELETE_ISSUE_SUCCESS,
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

export const addIssue = () => {
  return {
    type: ADD_ISSUE_REQUEST,
  };
};

export const addIssueSuccess = (payload) => {
  return {
    type: ADD_ISSUE_SUCCESS,
    payload: payload,
  };
};

export const addIssueFailure = (error) => {
  return {
    type: ADD_ISSUE_FAILURE,
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

export const addIssueAPI = (issueObj) => {
  return (dispatch) => {
    dispatch(addIssue);
    axios
      .post("http://localhost:30001/Issues", issueObj)
      .then((response) => {
        dispatch(addIssueSuccess(response.status));
      })
      .catch((err) => {
        dispatch(addIssueFailure(err.message));
      });
  };
};

export const deleteIssueAPI = (id, history) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:30001/Issues/${id}`);
    if (response.status === 200) {
      console.log("Inside 200");
      dispatch({
        type: DELETE_ISSUE_SUCCESS,
        payload: id,
      });
      history.push({ pathname: "/" });
    }
  } catch (error) {
    alert(`Issue was not deleted due to ${error.data.error.message}`);
  }
};
