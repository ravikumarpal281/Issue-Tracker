import React from "react";
import toJson from "enzyme-to-json";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EditIssue from "../components/EditIssue";
import { Spinner, Button, Form } from "react-bootstrap";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  history: {},
  location: {},
  match: {
    isExact: true,
    params: { id: "1" },
    path: "/editIssue/:id",
    url: "/editIssue/1",
  },
};
it("Edit Issue Snap", () => {
  const wrapper = shallow(<EditIssue {...props} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("Edit Issue Headers Test", () => {
  const wrapper = shallow(<EditIssue {...props} />);
  expect(wrapper.find("div").length).toEqual(1);
  expect(wrapper.find("h1").text()).toEqual("Edit Issue");
});

it("Edit Issue Labels Test", () => {
  const wrapper = shallow(<EditIssue {...props} />);
  expect(wrapper.find(Form.Label).length).toEqual(2);
});

it("Submit And Cancel Button Check", () => {
  const wrapper = shallow(<EditIssue {...props} />);
  expect(wrapper.find(Button).length).toEqual(2);
});

it("Submit Button Check", () => {
  const mockEdit = jest.fn();
  const wrapper = shallow(<Button onClick={mockEdit}>Submit</Button>);
  const editButton = wrapper.find({ children: "Submit" });
  expect(editButton).toBeTruthy();
  editButton.simulate("click");
  expect(mockEdit).toHaveBeenCalled();
});

it("Delete Button Check", () => {
  const mockEdit = jest.fn();
  const wrapper = shallow(<Button onClick={mockEdit}>Cancel</Button>);
  const editButton = wrapper.find({ children: "Cancel" });
  expect(editButton).toBeTruthy();
  editButton.simulate("click");
  expect(mockEdit).toHaveBeenCalled();
});
