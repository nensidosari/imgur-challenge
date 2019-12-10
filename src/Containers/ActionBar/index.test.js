import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";

import ActionBar from "./";
import { Dropdown, Checkbox, Pagination } from "../../Components/index";
import { dropdownValues } from "./";

import { ActionDiv } from "./styles";
import { CheckboxWrapper } from "../../Components/Checkbox/styles";

configure({ adapter: new Adapter() });

describe("<ActionBar/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ActionBar />);
  });

  it("should render one <ActionDiv/> from styles", () => {
    expect(wrapper.find(ActionDiv)).toHaveLength(1);
  });

  it("should render one <Pagination/> from styles", () => {
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });

  it("should render dropdownValues.length -1 <Dropdown/> from styles, if selected section is not equal to 'top' ", () => {
    expect(wrapper.find(Dropdown)).toHaveLength(dropdownValues.length - 1);
  });

  it("should open and close dropdown on dropdown click ", () => {
    wrapper = mount(<ActionBar getImages={jest.fn()} />);

    wrapper
      .find(".section_open_dropdown_handler")
      .first()
      .simulate("click");

    expect(
      wrapper
        .find(".section")
        .first()
        .props().isOpen
    ).toEqual(true);

    wrapper
      .find(".section_open_dropdown_handler")
      .first()
      .simulate("click");

    expect(
      wrapper
        .find(".section")
        .first()
        .props().isOpen
    ).toEqual(false);
  });

  it("should render dropdownValues.length <Dropdown/> from styles, if selected section is equal to 'top' ", () => {
    wrapper = mount(<ActionBar getImages={jest.fn()} />);

    wrapper.find(".section").simulate("click");
    wrapper
      .find(".section_top")
      .first()
      .simulate("click");

    expect(wrapper.find(Dropdown)).toHaveLength(dropdownValues.length);
  });

  it("should render one <Checkbox/> from styles, if selected section is equal to 'user' ", () => {
    wrapper = mount(<ActionBar getImages={jest.fn()} />);

    wrapper.find(".section").simulate("click");
    wrapper
      .find(".section_user")
      .first()
      .simulate("click");

    expect(wrapper.find(Checkbox)).toHaveLength(1);
  });

  it("should go to next page ( 1 to 2) if the next button is clicked", () => {
    wrapper = mount(<ActionBar getImages={jest.fn()} />);
    const currentPage = wrapper.find(Pagination).props().currentPage;
    wrapper.find(".next").simulate("click");
    expect(wrapper.find(Pagination).props().currentPage).toEqual(
      currentPage + 1
    );
  });

  it("should go to the end page (1 to 10) if the end button is clicked ", () => {
    wrapper = mount(<ActionBar getImages={jest.fn()} />);
    const totalPages = wrapper.find(Pagination).props().totalPages;
    wrapper.find(".end").simulate("click");
    expect(wrapper.find(Pagination).props().currentPage).toEqual(totalPages);
  });

  it("should go to the previous page (1 to 10 | 10 to 9) if the prev button is clicked ", () => {
    wrapper = mount(<ActionBar getImages={jest.fn()} />);
    const totalPages = wrapper.find(Pagination).props().totalPages;

    wrapper.find(".end").simulate("click");
    wrapper.find(".prev").simulate("click");
    expect(wrapper.find(Pagination).props().currentPage).toEqual(
      totalPages - 1
    );
  });

  it("should go to the first page (1 to 10 | 10 to 9 | 9 to 1) if the start button is clicked ", () => {
    wrapper = mount(<ActionBar getImages={jest.fn()} />);
    const currentPage = wrapper.find(Pagination).props().currentPage;

    wrapper.find(".end").simulate("click");
    wrapper.find(".prev").simulate("click");
    wrapper.find(".start").simulate("click");
    expect(wrapper.find(Pagination).props().currentPage).toEqual(currentPage);
  });

  it("<Checkbox> should set show viral from true to false when unchecked, if selected section is equal to 'user'", () => {
    wrapper = mount(<ActionBar getImages={jest.fn()} />);
    wrapper.find(".section").simulate("click");
    wrapper
      .find(".section_user")
      .first()
      .simulate("click");
    const showViralState = wrapper.find(Checkbox).props().showViral;

    wrapper
      .find(".show_viral_checkbox")
      .first()
      .simulate("click");

    expect(wrapper.find(Checkbox).props().showViral).toEqual(!showViralState);
  });
});
