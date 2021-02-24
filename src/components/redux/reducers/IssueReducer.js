import {
  ADD_ISSUE_REQUEST,
  ADD_ISSUE_SUCCESS,
  ADD_ISSUE_FAILURE,
  FETCH_ISSUES_ERROR,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
  ADD_USER_CLICK,
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

    // case ADD_USER_CLICK:
    //   console.log("ADD USER CLICK REDUCER", action.payload);
    //   return {
    //     ...state,
    //     issues: state.issues.filter((item) => {
    //       console.log("Inside MAP", item);
    //       if (item.id === action.payload) {
    //         console.log("Inside the equals", {
    //           ...item,
    //           userclicks: item.userclicks + 1,
    //         });
    //         return {
    //           ...item,
    //           userclicks: item.userclicks + 1,
    //         };
    //       } else {
    //         return item;
    //       }
    //     }),
    //   };

    default:
      return state;
  }
};

export default issueReducer;
