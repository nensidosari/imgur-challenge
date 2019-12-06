import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Checkbox from "./";

import { Label, CheckboxWrapper, Box } from "./styles";

configure({ adapter: new Adapter() });

describe("<Checkbox/>", () => {
  let wrapper;
  let changeParam;
  beforeEach(() => {
    wrapper = shallow(<Checkbox />);
    changeParam = jest.fn();
  });

  it("should render one <CheckboxWrapper/> from styles", () => {
    expect(wrapper.find(CheckboxWrapper)).toHaveLength(1);
  });

  it("should render one <i></i> if it contains the showViral prop", () => {
    wrapper.setProps({ showViral: true });
    expect(wrapper.find(".fa")).toHaveLength(1);
  });

  it("should render one <Label/> from styles", () => {
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it("should render one <Box/> from styles", () => {
    expect(wrapper.find(Box)).toHaveLength(1);
  });

  it("should fire changeParam on button click", () => {
    wrapper.setProps({ changeParam });
    wrapper.find(Box).simulate("click");
    expect(changeParam).toHaveBeenCalled();
  });
});
