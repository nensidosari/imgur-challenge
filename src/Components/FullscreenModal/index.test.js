import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";

import FullscreenModal from "./";
import { Header } from "../index";

import {
  Modal,
  Close,
  Body,
  Title,
  Media,
  Description,
  Flex,
  Ratings
} from "./styles";

configure({ adapter: new Adapter() });

describe("<FullscreenModal/>", () => {
  let wrapper, imitateFunc;
  beforeEach(() => {
    wrapper = shallow(<FullscreenModal />);
    imitateFunc = jest.fn();
  });

  it("should render one <Modal/> from styles", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it("should render one <Header/> from styles", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("should render one <Body/> from styles", () => {
    expect(wrapper.find(Body)).toHaveLength(1);
  });

  it("should render one <Flex/> from styles", () => {
    expect(wrapper.find(Flex)).toHaveLength(1);
  });

  it("should render one <Media/> from styles", () => {
    expect(wrapper.find(Media)).toHaveLength(1);
  });

  it("should render one <Ratings/> from styles", () => {
    expect(wrapper.find(Ratings)).toHaveLength(1);
  });

  it("should render one div inside flex", () => {
    expect(wrapper.find("#flex_div")).toHaveLength(1);
  });

  it("should render one <Title/> from styles", () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it("should render one <Description/> from styles", () => {
    expect(wrapper.find(Description)).toHaveLength(1);
  });

  it("should render three scores of ratings", () => {
    expect(wrapper.find(".ratings_score")).toHaveLength(3);
  });

  it("should render three font awsome icons", () => {
    expect(wrapper.find(".fa")).toHaveLength(3);
  });

  it("should render <Modal/> with  styles='top: unset;height: 0;' if openModal prop is false", () => {
    wrapper = mount(<Modal openModal={false} />);
    expect(wrapper.find(Modal)).toHaveStyleRule("height", "0");
    expect(wrapper.find(Modal)).toHaveStyleRule("top", "unset");
  });

  it("should render <Close/> button if openModal prop is true", () => {
    wrapper.setProps({ openModal: true });
    expect(wrapper.find(Close)).toHaveLength(1);
  });

  it("should render 4 font awsome icons if openModal prop is true", () => {
    wrapper.setProps({ openModal: true });
    expect(wrapper.find(".fa")).toHaveLength(4);
  });

  it("should fire close on Close button click if the modal is open", () => {
    wrapper.setProps({ close: imitateFunc, openModal: true });
    wrapper.find(Close).simulate("click");
    expect(imitateFunc).toHaveBeenCalled();
  });

  it("should show only one image or video if images prop is undefined", () => {
    wrapper.setProps({ openModal: true, img: { link: "test.jpg" } });
    expect(wrapper.find(".video_image")).toHaveLength(1);
  });

  it("should show images.length image or video if images prop is defined", () => {
    const images = [
      { link: "test.jpg", id: 1 },
      { link: "test2.jpg", id: 2 },
      { link: "test3.jpg", id: 3 }
    ];
    wrapper.setProps({ openModal: true, img: { images } });
    expect(wrapper.find(".video_image")).toHaveLength(images.length);
  });

  it("should show video with video tag if extension is .mp4", () => {
    const images = [
      { link: "test.mp4", id: 1 },
      { link: "test2.mp4", id: 2 },
      { link: "test3.jpg", id: 3 }
    ];
    wrapper.setProps({ openModal: true, img: { images } });
    expect(wrapper.find(".videoTag")).toHaveLength(2);
    expect(wrapper.find(".imageTag")).toHaveLength(1);
  });
});
