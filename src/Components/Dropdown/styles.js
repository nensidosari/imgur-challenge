import styled, { css } from "styled-components";

const DropdownContainer = styled.div`
  color: white;
  font-family: Acme;
  cursor: pointer;
  width: fit-content;
  display: flex;
`;

const Selected = styled.div`
  ${props => {
    const { isOpen } = props;
    return css`
  font-size: 20px;

  :hover {
    color: rgba(255, 255, 255, 0.5);
  }

  > i {
    margin-left: 10px;
    transition: all 0.5s ease;

   
    ${isOpen &&
      css`
        transform: rotate(-90deg);
      `}
    }}`;
  }}
`;

const Underline = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #fff;
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
    color: rgba(255, 255, 255, 0.5);
  }
  :hover:after {
    width: 100%;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
  }
`;

const ValuesContainer = styled.div`
  ${props => {
    const { isOpen } = props;

    return css`
      background: #53565d;
      border-radius: 5px;
      box-shadow: 0 9px 25px 0 rgba(0, 0, 0, 0.78);
      position: absolute;
      margin: -30px 70px;
      width: 0;
      overflow: auto;
      z-index: 2;
      transition: width 1s ease;
      -webkit-transition: width 0.2s ease;
      ::-webkit-scrollbar {
        height: 0 !important;
      }

      ${isOpen &&
        css`
          width: 100px;
        `}
    `;
  }}
`;

const Value = styled.div`
  margin: 15px;

  :hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export { DropdownContainer, Selected, Underline, ValuesContainer, Value };
