import styled, { css } from "styled-components";

const Modal = styled.div`
  ${props => {
    const { openModal } = props;
    return css`
      background: #141518;
      position: fixed;
      top: 0;
      height: 100%
      left: 0;
      right: 0;
      z-index: 3;
      transition: height 1s ease;
      overflow-y: scroll;
      height: 100vh;
    
      ::-webkit-scrollbar {
        width: 0 !important;
      }

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
    :hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const Body = styled.div`
  padding: 50px 100px;
  color: white;
  font-family: Acme;

  @media (max-width: 700px) {
    padding: 50px 20px;
  }
`;

const Title = styled.div`
  font-size: 25px;
`;

const Media = styled.div`
  width: 100%;

  > img {
    border-radius: 5px;
    width:80%;
    margin: 20px;
  }

  > video {
    border-radius: 5px;
    width:80%
    margin: 20px;
  }
`;

const Description = styled.div`
  font-size: 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  > :first-child {
    margin-right: 20px;
  }
`;

const Ratings = styled.div`
  margin-left: 20px;
  width: auto;
  display: flex;

  > div {
    font-size: 20px;
    margin-left: 10px;
  }
`;

export { Modal, Close, Body, Title, Media, Description, Flex, Ratings };
