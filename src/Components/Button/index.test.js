import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";

import Button from "./";

configure({ adapter: new Adapter() });

describe("<Button/>", () => {
  let wrapper;
  let onClickButton;
  beforeEach(() => {
    wrapper = shallow(<Button />);
    onClickButton = jest.fn();
  });

  it("should render one <StyledButton/> from styled", () => {
    expect(wrapper.find("#styledButton")).toHaveLength(1);
  });

  it("should render one <i></i> (icon) if it contains the icon prop", () => {
    wrapper.setProps({ icon: "fa" });
    expect(wrapper.find(".fa")).toHaveLength(1);
  });

  it("should render one <div></div>  if it contains the text prop", () => {
    wrapper.setProps({ text: "text" });
    expect(wrapper.find("#text")).toHaveLength(1);
  });

  it("should fire onClickButton on button click if not disabled", () => {
    wrapper.setProps({ onClickButton });
    wrapper.find("#styledButton").simulate("click");
    expect(onClickButton).toHaveBeenCalled();
  });

  it("should not fire onClickButton on button click if disabled", () => {
    wrapper.setProps({ onClickButton, disabled: true });
    wrapper.find("#styledButton").simulate("click");
    expect(onClickButton).toHaveBeenCalledTimes(0);
  });

  it("should fire onClickButton on button click if not disabled with 1 arg", () => {
    const name = "nensi";
    wrapper.setProps({ onClickButton, name });
    wrapper.find("#styledButton").simulate("click");
    expect(onClickButton).toHaveBeenCalledWith(name);
  });

  it("should not allow pointer events if is disabled", () => {
    wrapper = mount(<Button />);
    wrapper.setProps({ disabled: true });
    expect(wrapper.find("#styledButton")).toHaveStyleRule(
      "pointer-events",
      "none"
    );
  });
});
