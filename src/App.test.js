import { shallow } from "enzyme";
import React from "react";
import App from "./App";

it("renders without crashing", () => {
  var result = shallow(<App />);
  expect(result.find("div")).toHaveLength(1);
});
