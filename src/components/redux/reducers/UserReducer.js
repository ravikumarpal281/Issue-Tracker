import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_REQUEST_ERROR,
  LOGIN_USER_REQUEST_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_RQUEST,
  REGISTER_USER_SUCCESS,
} from "../Constants";

const initialState = {
  loading: false,
  error: "",
  currentUser: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_RQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_REQUEST_SUCCESS:
      console.log("Login Success REDUCER", state);
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case LOGIN_USER_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
