import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import SignIn from "../components/SignIn";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore({});
const wrapper = shallow(
  <Provider store={store}>
    <SignIn />
  </Provider>
);

const container = wrapper.find(SignIn);
it("Login Screen Test", () => {
  console.log("Length", container);
  expect(container.length).toBeTruthy();
  expect(container).toMatchSnapshot();
});
