import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { useWindowSize } from "../../customHooks";
import { getImages } from "../../store/actions/actionCreators";
import { filterImageData } from "../../transformData";
import { Thumbnail } from "../index";

import { LayoutContainer, Grid } from "./styles";

const Layout = ({ actions, images }) => {
  const [columns, setColumns] = useState(4);
  const [cardWidth, setCardWidth] = useState("200px");
  const [margin, setMargin] = useState(100);

  const [width] = useWindowSize();

  useEffect(() => actions.getImages(), [actions]);

  useEffect(() => {
    let cardDesiredWidth = (width - margin * 2 - 20 * (columns - 1)) / 4;

    setCardWidth(`${cardDesiredWidth}px`);
  }, [width]);

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
    });

    return columnsImages;
  };

  const renderThumbnails = () =>
    orderThumbnails().map((column, i) => (
      <div key={i}>
        {column.map(({ link, title, description, id, images }) => (
          <Thumbnail
            key={id}
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
      <Grid columns={columns} width={cardWidth}>
        {renderThumbnails()}
      </Grid>
    </LayoutContainer>
  );
};

const mapStateToProps = ({ images }) => ({
  images: filterImageData(images)
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getImages: () =>
      dispatch(getImages({ section: "hot", sort: "viral", window: "day" }, {}))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
