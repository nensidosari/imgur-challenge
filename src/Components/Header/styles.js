import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #171544;
  height: 70px;
  box-shadow: 0 0 25px 5px #000;
  position: sticky;
  top: 0;
  display: flex;
  z-index: 1;
`;
const Title = styled.div`
  color: white;
  margin: auto 50px;
  font-family: Acme;
  font-size: 20px;
`;

export { HeaderContainer, Title };
