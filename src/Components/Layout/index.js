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

  return (
    <LayoutContainer margin={margin}>
      <Grid columns={columns} width={cardWidth}>
        <div>
          {images.slice(0, 10).map(({ link, title, description, id }) => (
            <Thumbnail
              key={id}
              link={link}
              title={title}
              description={description}
            />
          ))}
        </div>
        <div>
          {images.slice(11, 20).map(({ link, title, description, id }) => (
            <Thumbnail
              key={id}
              link={link}
              title={title}
              description={description}
            />
          ))}
        </div>
        <div>
          {images.slice(21, 30).map(({ link, title, description, id }) => (
            <Thumbnail
              key={id}
              link={link}
              title={title}
              description={description}
            />
          ))}
        </div>
        <div>
          {images.slice(31, 40).map(({ link, title, description, id }) => (
            <Thumbnail
              key={id}
              link={link}
              title={title}
              description={description}
            />
          ))}
        </div>
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
