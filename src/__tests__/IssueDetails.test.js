import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import IssueDetails from "../components/IssueDetails";
import { Spinner, Button } from "react-bootstrap";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  history: {},
  id: {
    path: "/issue/:id",
    url: "/issue/1",
    isExact: true,
    params: {
      id: "1",
    },
  },
  location: {},
  match: {},
};
it("Issue Details Snap", () => {
  const wrapper = shallow(<IssueDetails.WrappedComponent id={props} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("Issue Details Headers Test", () => {
  const wrapper = shallow(<IssueDetails.WrappedComponent id={props} />);
  expect(wrapper.find("div").length).toEqual(1);
  expect(wrapper.find("h1").text()).toEqual("Issue Details");
  expect(wrapper.find("p").length).toEqual(4);
  expect(wrapper.find(Button).length).toEqual(2);
});

it("Issue Details Labels Test", () => {
  const wrapper = shallow(<IssueDetails.WrappedComponent id={props} />);
  expect(wrapper.find("p").length).toEqual(4);
});

it("Edit And Delete Button Check", () => {
  const wrapper = shallow(<IssueDetails.WrappedComponent id={props} />);
  expect(wrapper.find(Button).length).toEqual(2);
});

it("Edit Button Check", () => {
  const mockEdit = jest.fn();
  const wrapper = shallow(<Button onClick={mockEdit}>Edit Issue</Button>);
  const editButton = wrapper.find({ children: "Edit Issue" });
  expect(editButton).toBeTruthy();
  editButton.simulate("click");
  expect(mockEdit).toHaveBeenCalled();
});

it("Delete Button Check", () => {
  const mockEdit = jest.fn();
  const wrapper = shallow(<Button onClick={mockEdit}>Delete Issue</Button>);
  const editButton = wrapper.find({ children: "Delete Issue" });
  expect(editButton).toBeTruthy();
  editButton.simulate("click");
  expect(mockEdit).toHaveBeenCalled();
});
