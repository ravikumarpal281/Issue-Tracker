import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import HomePageUI from "../components/HomePage/HomePageUI";
import { Spinner } from "react-bootstrap";

Enzyme.configure({ adapter: new Adapter() });

it("Home Page Snap", () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("Error page test", () => {
  const issuesData = {
    loading: false,
    error: "This is error",
    issues: [],
  };
  const wrapper = shallow(<HomePageUI issuesData={issuesData} />);
  expect(wrapper.find("h2").text()).toEqual("This is error");
});

it("Props test in Home Page", () => {
  const issuesData = {
    loading: false,
    error: "",
    issues: [],
  };
  const wrapper = shallow(<HomePageUI issuesData={issuesData} />);
  expect(wrapper.find("div").length).toEqual(1);
});

it("Spinner test in Home Page", () => {
  const issuesData = {
    loading: true,
    error: "",
    issues: [],
  };
  const wrapper = shallow(<HomePageUI issuesData={issuesData} />);
  expect(wrapper.find(Spinner).length).toEqual(1);
});
