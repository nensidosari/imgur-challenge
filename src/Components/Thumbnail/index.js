import React from "react";

import { ThumbnailCard, Title, Description, Content } from "./styles";

const Thumbnail = ({ link, title, description }) => {
  const showImgOrVideo = () =>
    link.includes(".mp4") && link.slice(-4) === ".mp4" ? (
      <video draggable="false" playsInline loop autoPlay alt={title}>
        <source
          src={link + "?maxwidth=520&shape=thumb&fidelity=high"}
          type="video/mp4"
        />
      </video>
    ) : (
      <img src={link + "?maxwidth=520&shape=thumb&fidelity=high"} alt={title} />
    );
  return (
    <ThumbnailCard>
      {showImgOrVideo()}
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </ThumbnailCard>
  );
};

export default Thumbnail;
