import styled from "styled-components";

const Label = styled.div`
  font-family: Acme;
  font-size: 20px;
  color: white;
  margin-left: 10px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  border: 2px solid white;
  width: 16px;
  height: 16px;
  margin: auto;
  display: flex;
  cursor: pointer;

  > i {
    color: white;
    margin: auto;
    font-size: 14px;
  }
`;

export { Label, CheckboxWrapper, Box };
