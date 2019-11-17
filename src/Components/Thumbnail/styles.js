import styled, { css } from "styled-components";

const ThumbnailCard = styled.div`
  margin-bottom: 20px;
  > img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  > video {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  background: #474a51;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);

  :hover {
    transition: all 0.5s ease;
    -webkit-filter: opacity(60%);
    filter: opacity(60%);
    cursor: pointer;
    z-index: 1;
  }
`;

const Content = styled.div`
  display: flex;
  color: white;
  font-family: Acme;
  flex-flow: column;
  padding: 10px 15px;
`;

const Title = styled.div`
  font-size: 18px;
  word-wrap: break-word;
`;

const Description = styled.div`
  font-size: 13px;
  word-wrap: break-word;
`;

const TotalImages = styled.div`
  ${props => {
    const { width } = props;
    return css`
      display: flex;
      position: absolute;
      width: ${width};
      justify-content: flex-end;
    `;
  }}
`;

const ImgNumberDiv = styled.div`
  width: 30px;
  height: 24px;
  background: rgba(82, 85, 94, 0.6);
  color: white;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  line-height: 24px;
  font-family: Acme;
`;

const ThumbnailSkeleton = styled.div`
  ${props => {
    const { height, color } = props;
    return css`
      height: ${height + "px"};
      background: linear-gradient(${color}, rgb(46, 48, 53));
      margin-bottom: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    `;
  }}
`;

export {
  ThumbnailCard,
  Content,
  Title,
  Description,
  TotalImages,
  ImgNumberDiv,
  ThumbnailSkeleton
};
