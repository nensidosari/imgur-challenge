import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";

import Skeleton from "./skeleton";

import { ThumbnailSkeleton } from "./styles";

configure({ adapter: new Adapter() });

describe("<Skeleton/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Skeleton height={200} color={"red"} />);
  });

  it("should render one <ThumbnailSkeleton/> from styles", () => {
    expect(wrapper.find(ThumbnailSkeleton)).toHaveLength(1);
  });

  it("should render one <ThumbnailSkeleton/> with height:200px and background:linear-gradient(red, rgb(46, 48, 53))", () => {
    wrapper = mount(<ThumbnailSkeleton height={200} color={"red"} />);
    expect(wrapper.find(ThumbnailSkeleton)).toHaveStyleRule("height", "200px");
    expect(wrapper.find(ThumbnailSkeleton)).toHaveStyleRule(
      "background",
      "linear-gradient(red,rgb(46,48,53))"
    );
  });
});
