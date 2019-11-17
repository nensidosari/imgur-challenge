import React from "react";

import {
  ThumbnailCard,
  Title,
  Description,
  Content,
  TotalImages,
  ImgNumberDiv
} from "./styles";

const Thumbnail = ({ link, title, description, images, width, id }) => {
  const showImgOrVideo = () =>
    link.includes(".mp4") && link.slice(-4) === ".mp4" ? (
      <video draggable="false" playsInline loop autoPlay alt={title} id={id}>
        <source
          src={link + "?maxwidth=520&shape=thumb&fidelity=high"}
          type="video/mp4"
        />
      </video>
    ) : (
      <img
        src={link + "?maxwidth=520&shape=thumb&fidelity=high"}
        alt={title}
        id={id}
      />
    );
  return (
    <ThumbnailCard>
      {images && images.length > 1 && (
        <TotalImages width={width}>
          <ImgNumberDiv>{images.length}</ImgNumberDiv>
        </TotalImages>
      )}
      {showImgOrVideo()}

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </ThumbnailCard>
  );
};

export default Thumbnail;
