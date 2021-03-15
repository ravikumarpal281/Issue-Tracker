import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserClick } from "./redux/actions/UserClickAction";
import HomePage from "./HomePage/HomePage";
import HomePageCustomizedLayout from "./HomePage/HomePageCustomizedLayout";

const IssuesList = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const issueListToDisplay = props.issues
    .filter((val) => {
      if (searchText === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchText.toLowerCase())) {
        return val;
      }
    })
    .map((item) => (
      <HomePageCustomizedLayout
        key={item.id}
        item={item}
      ></HomePageCustomizedLayout>
    ));
  return (
    <div>
      <Container>
        <input
          type="text"
          style={{ width: "100%", marginTop: "10px" }}
          placeholder="Search Issues"
          value={searchText}
          onChange={handleSearchText}
        ></input>
        {issueListToDisplay}
      </Container>
    </div>
  );
};

export default withRouter(IssuesList);
