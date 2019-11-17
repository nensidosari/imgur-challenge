import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { useWindowSize } from "../customHooks";
import { getImages } from "../store/actions/actionCreators";
import { filterImageData } from "../transformData";
import { Thumbnail, ActionBar } from "../Components/index";
import Skeleton from "./skeleton";

import { LayoutContainer, Grid } from "./styles";

const Layout = ({ actions, images, loading }) => {
  const [columns, setColumns] = useState(4);
  const [cardWidth, setCardWidth] = useState("200px");
  const [margin, setMargin] = useState(100);

  const [width] = useWindowSize();

  const isIPadProPortrait = useMediaQuery({
    query: "(max-width: 1024px)"
  });
  const isIPadPortrait = useMediaQuery({
    query: "(max-width: 768px)"
  });

  const isPhone = useMediaQuery({
    query: "(max-width: 500px)"
  });

  useEffect(() => actions.getImages(), [actions]);

  useEffect(() => {
    let col = columns;
    if (isPhone) {
      setMargin(25);
      setColumns(1);
      col = 1;
    } else if (isIPadPortrait) {
      setMargin(50);
      setColumns(3);
      col = 3;
    } else if (isIPadProPortrait) {
      setColumns(3);
      col = 3;
    } else if (columns !== 4) {
      setColumns(4);
      setMargin(100);
    }
    let cardDesiredWidth = (width - margin * 2 - 20 * col) / col;

    setCardWidth(`${cardDesiredWidth}px`);
  }, [width, columns, isIPadPortrait, isIPadProPortrait, isPhone, margin]);

  const orderThumbnails = () => {
    let currentColumn = 0;
    const columnsImages = [];

    images.map(({ link, title, description, id, images }) => {
      if (!columnsImages[currentColumn]) columnsImages[currentColumn] = [];

      columnsImages[currentColumn].push({
        link,
        title,
        description,
        id,
        images
      });
      currentColumn = currentColumn === columns - 1 ? 0 : currentColumn + 1;
      return {};
    });

    return columnsImages;
  };

  const renderThumbnails = () =>
    orderThumbnails().map((column, i) => (
      <div key={i}>
        {column.map(({ link, title, description, id, images }) => (
          <Thumbnail
            key={id}
            id={id}
            link={link}
            title={title}
            description={description}
            images={images}
            width={cardWidth}
          />
        ))}
      </div>
    ));

  return (
    <LayoutContainer margin={margin}>
      <ActionBar />
      <Grid columns={columns} width={cardWidth}>
        {loading ? <Skeleton columns={columns} /> : renderThumbnails()}
      </Grid>
    </LayoutContainer>
  );
};

const mapStateToProps = ({ images, loading }) => ({
  images: filterImageData(images),
  loading
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getImages: () =>
      dispatch(getImages({ section: "hot", sort: "viral", window: "day" }, {}))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
