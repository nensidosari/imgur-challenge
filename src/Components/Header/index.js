import React from "react";
import { HeaderContainer, Title } from "./styles";

const Header = ({ title }) => (
  <HeaderContainer>
    <Title>{title}</Title>
  </HeaderContainer>
);

export default Header;
