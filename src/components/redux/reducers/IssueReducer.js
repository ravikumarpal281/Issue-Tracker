import {
  ADD_ISSUE_REQUEST,
  ADD_ISSUE_SUCCESS,
  ADD_ISSUE_FAILURE,
  FETCH_ISSUES_ERROR,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
  ADD_USER_CLICK,
  DELETE_ISSUE_SUCCESS,
} from "../Constants";

const initialState = {
  loading: false,
  issues: [],
  error: "",
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: action.payload,
      };

    case FETCH_ISSUES_ERROR:
      return {
        ...state,
        loading: false,
        issues: [],
        error: action.payload,
      };

    case ADD_ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case ADD_ISSUE_FAILURE:
      return {
        loading: false,
        issues: [],
        error: action.payload,
      };
    case DELETE_ISSUE_SUCCESS:
      const id = action.payload;
      const afterDeleteIssues = state.issues.filter((item) => item.id !== id);
      return {
        loading: false,
        issues: afterDeleteIssues,
        error: "",
      };
    default:
      return state;
  }
};

export default issueReducer;
