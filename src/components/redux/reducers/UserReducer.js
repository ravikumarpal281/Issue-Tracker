import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_REQUEST_ERROR,
  LOGIN_USER_REQUEST_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_RQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_CUSTOM_FIELD,
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
        error: "",
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case LOGIN_USER_REQUEST_SUCCESS:
      console.log("Login Success REDUCER", state);
      return {
        loading: false,
        currentUser: action.payload,
        error: "",
      };
    case LOGIN_USER_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: [],
      };
    case UPDATE_CUSTOM_FIELD:
      console.log("Action PAYLOAD RDUCER", action.payload);
      console.log("ReduCER", {
        ...state.currentUser[0],
        customFields: action.payload,
      });
      return {
        ...state,
        currentUser: [
          { ...state.currentUser[0], customFields: action.payload },
        ],
      };
    default:
      return state;
  }
};

export default UserReducer;
