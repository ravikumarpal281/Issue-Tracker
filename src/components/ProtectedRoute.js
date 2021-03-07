import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const Component = props.component;
  const userData = useSelector((state) => state.users);
  const isLoggedIn = userData.currentUser[0];
  console.log("Protected PROPS", props);
  return isLoggedIn ? (
    <Component id={props.computedMatch}></Component>
  ) : (
    <Redirect to={{ pathname: "/Login", state: props.location }}></Redirect>
  );
};

export default ProtectedRoute;
