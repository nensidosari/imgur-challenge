import styled, { css } from "styled-components";

const LayoutContainer = styled.div`
  ${props => {
    const { margin } = props;
    return css`
      width: auto;
      margin: ${margin + "px"};
    `;
  }}
`;

const Grid = styled.div`
  ${props => {
    const { columns, width } = props;
    return css`
      display: grid;
      grid-template-columns: repeat(${columns}, ${width});
      grid-gap: 20px;
    `;
  }}
`;
export { LayoutContainer, Grid };
