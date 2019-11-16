import styled from "styled-components";

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
    z-index: 2;
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
`;

const Description = styled.div`
  font-size: 13px;
`;

export { ThumbnailCard, Content, Title, Description };
