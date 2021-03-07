import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import IssuesList from "../components/IssuesList";
import { Card, Col, Container, Row } from "react-bootstrap";

Enzyme.configure({ adapter: new Adapter() });

const issues = [
  {
    id: 1,
    name: "Issue One After Edit",
    description: "On Clicking Delete, the application crashes",
    severity: "Critical",
    status: "In Progress",
  },
];
it("Rendering Issues", () => {
  const wrapper = shallow(<IssuesList issues={issues} />);
  expect(wrapper).toBeTruthy();
});
