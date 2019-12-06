import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";

import Dropdown from "./";

import {
  DropdownContainer,
  Selected,
  Underline,
  ValuesContainer,
  Value,
  Icon
} from "./styles";

configure({ adapter: new Adapter() });

describe("<Dropdown/>", () => {
  let wrapper, imitateFunc;
  beforeEach(() => {
    wrapper = shallow(<Dropdown />);
    imitateFunc = jest.fn();
  });

  it("should render one <DropdownContainer/> from styles", () => {
    expect(wrapper.find(DropdownContainer)).toHaveLength(1);
  });

  it("should render one <Underline/> from styles", () => {
    expect(wrapper.find(Underline)).toHaveLength(1);
  });

  it("should render one <Selected/> from styles", () => {
    expect(wrapper.find(Selected)).toHaveLength(1);
  });

  it("should render one <ValuesContainer/> from styles", () => {
    expect(wrapper.find(ValuesContainer)).toHaveLength(1);
  });

  it("should render values.length <Value/> from styles", () => {
    let values = ["1", "2", "3", "4", "5"];
    wrapper.setProps({ values });
    expect(wrapper.find(Value)).toHaveLength(values.length);
  });

  it("should fire openDropdown on button click", () => {
    wrapper.setProps({ openDropdown: imitateFunc });
    wrapper.find(Underline).simulate("click");
    expect(imitateFunc).toHaveBeenCalled();
  });

  it("should fire openDropdown on button click with 1 arg", () => {
    const type = false;
    wrapper.setProps({ openDropdown: imitateFunc, type });
    wrapper.find(Underline).simulate("click");
    expect(imitateFunc).toHaveBeenCalledWith({ type });
  });

  it("should fire changeSelected on button click", () => {
    const values = ["1"];
    wrapper.setProps({ changeSelected: imitateFunc, values });
    wrapper.find(Value).simulate("click");
    expect(imitateFunc).toHaveBeenCalled();
  });

  it("should fire changeSelected on button click with 1 arg", () => {
    const values = ["1"];
    wrapper.setProps({ changeSelected: imitateFunc, values });
    wrapper.find(Value).simulate("click");
    expect(imitateFunc).toHaveBeenCalledWith("1");
  });

  it("<Icon/> should transform: rotate(-90deg) if isOpen prop is true", () => {
    wrapper = mount(<Dropdown isOpen={true} />);
    expect(wrapper.find(Icon)).toHaveStyleRule("transform", "rotate(-90deg)");
  });

  it("<ValuesContainer/> should have width equal to 100px if isOpen prop is true", () => {
    wrapper = mount(<Dropdown isOpen={true} />);
    expect(wrapper.find(ValuesContainer)).toHaveStyleRule("width", "100px");
  });
});
