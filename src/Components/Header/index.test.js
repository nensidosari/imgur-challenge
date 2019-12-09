import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./";

import { HeaderContainer, Title } from "./styles";

configure({ adapter: new Adapter() });

describe("<Header/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render one <HeaderContainer/> from styles", () => {
    expect(wrapper.find(HeaderContainer)).toHaveLength(1);
  });

  it("should render one <Title/> from styles", () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });
});
