import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";

import Thumbnail from "./";

import {
  ThumbnailCard,
  Title,
  Description,
  Content,
  TotalImages,
  ImgNumberDiv
} from "./styles";
import { wrap } from "module";

configure({ adapter: new Adapter() });

describe("<Thumbnail/>", () => {
  let wrapper, imitateFunc;
  beforeEach(() => {
    wrapper = shallow(<Thumbnail link={"test.mp4"} id={1} />);
    imitateFunc = jest.fn();
  });

  it("should render one <ThumbnailCard/> from styles", () => {
    expect(wrapper.find(ThumbnailCard)).toHaveLength(1);
  });

  it("should render one <video/>  if link is .mp4", () => {
    expect(wrapper.find(".videoTag")).toHaveLength(1);
  });

  it("should render one <img/>  if link is .jpg", () => {
    wrapper.setProps({ link: "test.jpg" });
    expect(wrapper.find(".imageTag")).toHaveLength(1);
  });

  it("should render one <Content/> from styles", () => {
    expect(wrapper.find(Content)).toHaveLength(1);
  });

  it("should render one <Title/> from styles", () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it("should render one <Description/> from styles", () => {
    expect(wrapper.find(Description)).toHaveLength(1);
  });

  it("should render one <TotalImages/> from styles if images.length is bigger than 1", () => {
    const images = [{ link: "test1.jpg" }, { link: "test2.jpg" }];
    wrapper.setProps({ images });
    expect(wrapper.find(TotalImages)).toHaveLength(1);
  });

  it("should render one <ImgNumberDiv/> from styles if images.length is bigger than 1", () => {
    const images = [{ link: "test1.jpg" }, { link: "test2.jpg" }];
    wrapper.setProps({ images });
    expect(wrapper.find(ImgNumberDiv)).toHaveLength(1);
  });

  it("should fire onClick on button click", () => {
    wrapper.setProps({ onClick: imitateFunc });
    wrapper.find(ThumbnailCard).simulate("click");
    expect(imitateFunc).toHaveBeenCalled();
  });

  it("should fire onClick on button click with 1 arg", () => {
    let id = 1;
    wrapper.setProps({ onClick: imitateFunc, id });
    wrapper.find(ThumbnailCard).simulate("click");
    expect(imitateFunc).toHaveBeenCalledWith(id);
  });
});
