import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Pagination from "./";
import { Button } from "../";
import { buttonIconsRight, buttonIconsLeft } from "./";

import { Flex, CurrentPage } from "./styles";

configure({ adapter: new Adapter() });

describe("<Pagination/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Pagination />);
  });

  it("should render one <Flex/> from styles", () => {
    expect(wrapper.find(Flex)).toHaveLength(1);
  });

  it("should render one <CurrentPage/> from styles", () => {
    expect(wrapper.find(CurrentPage)).toHaveLength(1);
  });

  it("should render <Button/> components as dclared in buttonIconsRight and buttonIconsLeft (4)", () => {
    const buttonsLength =
      Object.keys(buttonIconsLeft).length +
      Object.keys(buttonIconsRight).length;
    expect(wrapper.find(Button)).toHaveLength(buttonsLength);
  });
});
