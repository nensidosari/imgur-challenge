import React from "react";

import { Header } from "../index";

import { Modal, Close } from "./styles";

const FullScreenModal = ({ openModal, close }) => {
  return (
    <Modal openModal={openModal}>
      <Header title={"Imgur Coding Challenge"} />
      {openModal && (
        <Close onClick={close}>
          <i className={"fa fa-times"} />
        </Close>
      )}
      modal
    </Modal>
  );
};

export default FullScreenModal;
