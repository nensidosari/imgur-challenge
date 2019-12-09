import React from "react";

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

const FullScreenModal = ({ openModal, close, img = {} }) => {
  const { title, description, ups, downs, score, id, images, link = "" } = img;

  const showImgOrVideo = (link, id) =>
    link.includes(".mp4") && link.slice(-4) === ".mp4" ? (
      <video
        draggable="false"
        playsInline
        loop
        autoPlay
        alt={title}
        id={id}
        key={id}
        controls
        className={"video_image videoTag"}
      >
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
        key={id}
        className={"video_image imageTag"}
      />
    );

  return (
    <Modal openModal={openModal}>
      <Header title={"Imgur Coding Challenge"} />
      {openModal && (
        <Close onClick={close}>
          <i className={"fa fa-times"} />
        </Close>
      )}
      <Body>
        <Flex>
          <div id="flex_div">
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
          <Ratings>
            <div className="ratings_score">
              <i className="fa fa-arrow-up" />
              {ups}
            </div>
            <div className="ratings_score">
              <i className="fa fa-arrow-down" />
              {downs}
            </div>
            <div className="ratings_score">
              <i className="fa fa-star" aria-hidden="true" />
              {score}
            </div>
          </Ratings>
        </Flex>
        <Media>
          {images
            ? images.map(img => showImgOrVideo(img.link, img.id))
            : showImgOrVideo(link, id)}
        </Media>
      </Body>
    </Modal>
  );
};
export default FullScreenModal;
