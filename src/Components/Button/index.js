import React from "react";

import { StyledButton } from "./styles";

const Button = ({
  icon,
  text,
  iconPosition = "right",
  name,
  onClickButton,
  disabled = false
}) => {
  const renderIcon = () => <i className={icon}></i>;
  return (
    <StyledButton
      onClick={() => !disabled && onClickButton(name)}
      disabled={disabled}
      id="styledButton"
    >
      {icon && iconPosition === "left" && renderIcon()}
      {text && <div id="text">{text} </div>}
      {icon && iconPosition === "right" && renderIcon()}
    </StyledButton>
  );
};

export default Button;
