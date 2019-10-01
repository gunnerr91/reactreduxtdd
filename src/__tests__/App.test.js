import { shallow } from "enzyme";
import React from "react";
import App from "./../App";

describe("App component", () => {
  // it("renders without crashing", () => {
  //   shallow(<App />);
  // });

  // it("should have a header", () => {
  //   let component = shallow(<App />);
  //   expect(component.find("[data-app-header]")).toHaveLength(1);
  // });

  // it("should have two input fields and labels", () => {
  //   let component = shallow(<App />);
  //   expect(component.find("[data-game-field]")).toHaveLength(1);
  //   expect(component.find("[data-genre-field]")).toHaveLength(1);
  //   expect(component.find("[data-game-label]")).toHaveLength(1);
  //   expect(component.find("[data-genre-label]")).toHaveLength(1);
  // });

  // it("should store game input in a state", () => {
  //   let component = shallow(<App />);
  //   expect(component.find("[data-game-field]").props().value).toBe("");
  // });

  // it("should update the state when game input on change is called", () => {
  //   let component = shallow(<App />);
  //   expect(component.find("[data-game-field]").props().value).toBe("");
  //   component
  //     .find("[data-game-field]")
  //     .props()
  //     .onChange({
  //       target: { value: "new name" }
  //     });
  //   expect(component.find("[data-game-field]").props().value).toBe("new name");
  // });

  // it("should store genre input in a state", () => {
  //   let component = shallow(<App />);
  //   expect(component.find("[data-genre-field]").props().value).toBe("");
  // });

  // it("should update the state when genre input on change is called", () => {
  //   let component = shallow(<App />);
  //   expect(component.find("[data-genre-field]").props().value).toBe("");
  //   component
  //     .find("[data-genre-field]")
  //     .props()
  //     .onChange({
  //       target: { value: "new genre" }
  //     });
  //   expect(component.find("[data-genre-field]").props().value).toBe(
  //     "new genre"
  //   );
  // });

  // it("should have an add button of type submit", () => {
  //   let addButton = shallow(<App />).find("button");
  //   expect(addButton).toHaveLength(1);
  //   expect(addButton.prop("type")).toBe("submit");
  // });

  // it("should update the state with game entry", () => {
  //   let component = shallow(<App />);
  //   expect(component.find("[data-games-list]")).toHaveLength(0);
  //   component
  //     .find("[data-game-field]")
  //     .props()
  //     .onChange({
  //       target: { value: "new name" }
  //     });
  //   component
  //     .find("[data-genre-field]")
  //     .props()
  //     .onChange({
  //       target: { value: "new genre" }
  //     });
  //   component.find("button").prop("onClick")();
  //   expect(component.find("[data-games-list]")).toHaveLength(1);
  // });

  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should have a header", () => {
    let component = shallow(<App />);
    expect(component.find("[data-app-header]")).toHaveLength(1);
  });

  it("should have two input fields and labels", () => {
    let component = shallow(<App />);
    expect(component.find("[data-game-field]")).toHaveLength(1);
    expect(component.find("[data-genre-field]")).toHaveLength(1);
    expect(component.find("[data-game-label]")).toHaveLength(1);
    expect(component.find("[data-genre-label]")).toHaveLength(1);
  });

  it("should store game input in a state", () => {
    let component = shallow(<App />);
    expect(component.find("[data-game-field]").props().value).toBe("");
  });

  it("should update the state when game input on change is called", () => {
    let component = shallow(<App />);
    expect(component.find("[data-game-field]").props().value).toBe("");
    component
      .find("[data-game-field]")
      .props()
      .onChange({
        target: { value: "new name" }
      });
    expect(component.find("[data-game-field]").props().value).toBe("new name");
  });

  it("should store genre input in a state", () => {
    let component = shallow(<App />);
    expect(component.find("[data-genre-field]").props().value).toBe("");
  });

  it("should update the state when genre input on change is called", () => {
    let component = shallow(<App />);
    expect(component.find("[data-genre-field]").props().value).toBe("");
    component
      .find("[data-genre-field]")
      .props()
      .onChange({
        target: { value: "new genre" }
      });
    expect(component.find("[data-genre-field]").props().value).toBe(
      "new genre"
    );
  });

  it("should have an add button of type submit", () => {
    let addButton = shallow(<App />).find("button");
    expect(addButton).toHaveLength(1);
    expect(addButton.prop("type")).toBe("submit");
  });

  it("should update the state with game entry", () => {
    let component = shallow(<App />);
    expect(component.find("[data-games-list]")).toHaveLength(0);
    component
      .find("[data-game-field]")
      .props()
      .onChange({
        target: { value: "new name" }
      });
    component
      .find("[data-genre-field]")
      .props()
      .onChange({
        target: { value: "new genre" }
      });
    component.find("button").prop("onClick")();
    expect(component.find("[data-games-list]")).toHaveLength(1);
  });
});
