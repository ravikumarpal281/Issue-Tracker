import axios from "axios";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_REQUEST_ERROR,
  LOGIN_USER_REQUEST_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_RQUEST,
  REGISTER_USER_SUCCESS,
} from "../Constants";

export const registerUserRequest = () => {
  return {
    type: REGISTER_USER_RQUEST,
  };
};

export const registerUserSuccess = (payload) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: payload,
  };
};

export const registerUserError = (error) => {
  return {
    type: REGISTER_USER_ERROR,
    payload: error,
  };
};

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

export const loginUserSuccess = (payload) => {
  console.log("AFTER SUCCESS", payload);
  return {
    type: LOGIN_USER_REQUEST_SUCCESS,
    payload: payload,
  };
};

export const loginUserError = (error) => {
  return {
    type: LOGIN_USER_REQUEST_ERROR,
    payload: error,
  };
};

export const logoutuser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const registerUserAPI = (userDetails) => {
  return (dispatch) => {
    dispatch(registerUserRequest);
    axios
      .post("http://localhost:30001/Users", userDetails)
      .then((response) => {
        dispatch(registerUserSuccess.status);
      })
      .catch((error) => {
        dispatch(registerUserError(error));
      });
  };
};

export const loginUserAPI = (loginDetails) => {
  console.log("UserACTION PAYLOAD", loginDetails);
  return (dispatch) => {
    dispatch(loginUserRequest);
    axios
      .get(
        `http://localhost:30001/Users?email=${loginDetails.Email}&password=${loginDetails.Password}`
      )
      .then((response) => {
        console.log("response data", response);
        dispatch(loginUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loginUserError(error));
      });
  };
};
