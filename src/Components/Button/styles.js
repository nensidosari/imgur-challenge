import styled, { css } from "styled-components";

const StyledButton = styled.div`
  ${props => {
    return css`
      background: transparent;
      margin: 0 5px;
      color: white;
      font-family: Acme;
      cursor: pointer;
      font-size: 20px;
      :hover {
        color: rgba(255, 255, 255, 0.5);
      }
      ${props.disabled &&
        "color:rgba(255, 255, 255, 0.5);cursor:not-allowed;pointer-events:none;"}
    `;
  }}
`;

export { StyledButton };
