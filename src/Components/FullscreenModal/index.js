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
  const showImgOrVideo = link =>
    link.includes(".mp4") && link.slice(-4) === ".mp4" ? (
      <video
        draggable="false"
        playsInline
        loop
        autoPlay
        alt={title}
        id={id}
        controls
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
          <div>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
          <Ratings>
            <div>
              <i class="fa fa-arrow-up" />
              {ups}
            </div>
            <div>
              <i class="fa fa-arrow-down" />
              {downs}
            </div>
            <div>
              <i class="fa fa-star" aria-hidden="true" />
              {score}
            </div>
          </Ratings>
        </Flex>
        <Media>
          {images
            ? images.map(img => showImgOrVideo(img.link))
            : showImgOrVideo(link)}
        </Media>
      </Body>
    </Modal>
  );
};

export default FullScreenModal;
