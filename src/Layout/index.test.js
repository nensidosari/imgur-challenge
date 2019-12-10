import React from "react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";

import Layout from "./";

import { useWindowSize } from "../customHooks";
import { getImages } from "../store/actions/actionCreators";
import { filterImageData } from "../transformData";
import { Thumbnail, FullscreenModal } from "../Components";
import { ActionBar } from "../Containers";
import Skeleton from "./skeleton";

import { LayoutContainer, Grid } from "./styles";

configure({ adapter: new Adapter() });

describe("<Layout/>", () => {
  let wrapper, store;
  beforeEach(() => {
    store = mockStore({
      loading: false,
      images: []
    });

    store.dispatch = jest.fn();

    wrapper = mount(
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  });

  it("should render one <LayoutContainer/> from styles with margin as props", () => {
    expect(wrapper.find(LayoutContainer)).toHaveLength(1);
    const margin = wrapper.find(LayoutContainer).props().margin;
    expect(wrapper.find(LayoutContainer)).toHaveStyleRule(
      "margin",
      margin + "px"
    );
  });

  it("should render one <ActionBar/> from components", () => {
    expect(wrapper.find(ActionBar)).toHaveLength(1);
  });

  it("should render one <Grid/> from styles with columns and cardWidth as props", () => {
    expect(wrapper.find(Grid)).toHaveLength(1);
    const columns = wrapper.find(Grid).props().columns;
    const width = wrapper.find(Grid).props().width;
    expect(wrapper.find(Grid)).toHaveStyleRule(
      "grid-template-columns",
      `repeat(${columns},${width})`
    );
  });
});
