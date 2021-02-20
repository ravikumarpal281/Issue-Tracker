import {
  FETCH_ISSUES_ERROR,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
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

    default:
      return state;
  }
};

export default issueReducer;
