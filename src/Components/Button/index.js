import React from "react";

import { StyledButton } from "./styles";

const Button = ({
  icon,
  text = "",
  iconPosition = "right",
  name,
  onClickButton,
  disabled = false
}) => {
  const renderIcon = () => <i className={icon}></i>;
  return (
    <StyledButton onClick={() => onClickButton(name)} disabled={disabled}>
      {iconPosition === "left" && renderIcon()}
      {text}
      {iconPosition === "right" && renderIcon()}
    </StyledButton>
  );
};

export default Button;
