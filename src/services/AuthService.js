import axios from "axios";

const API_URL = "http://localhost:30001/Users";
const login = (loginDetails) => {
  console.log("Auth service called ");
  return axios.get(
    API_URL + `?email=${loginDetails.Email}&password=${loginDetails.Password}`
  );
};

export default {
  login,
};
