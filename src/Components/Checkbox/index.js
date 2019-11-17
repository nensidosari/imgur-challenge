import React from "react";

import { Label, CheckboxWrapper, Box } from "./styles";

const Checkbox = ({ showViral, changeParam }) => {
  return (
    <CheckboxWrapper>
      <Box onClick={changeParam}>
        {showViral && <i className="fa fa-check" />}
      </Box>
      <Label>SHOW VIRAL</Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
