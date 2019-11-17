import styled, { css } from "styled-components";

const Modal = styled.div`
  ${props => {
    const { openModal } = props;
    return css`
      background: white;
      position: fixed;
      top: 0;
      height: 100%
      left: 0;
      right: 0;
      z-index: 3;
      transition: height 1s ease;

      ${!openModal &&
        css`
          top: unset;
          height: 0;
        `}
    `;
  }}
`;

const Close = styled.div`
  position: fixed;
  top: 20px;
  right: 50px;
  z-index: 3;
  color: white;
  cursor: pointer;
  > i {
    font-size: 25px;
    :hover  {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export { Modal, Close };
