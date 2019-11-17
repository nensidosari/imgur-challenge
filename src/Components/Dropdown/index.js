import React from "react";

import {
  DropdownContainer,
  Selected,
  Underline,
  ValuesContainer,
  Value
} from "./styles";

const Dropdown = ({
  type,
  values,
  selected,
  openDropdown,
  isOpen = false,
  changeSelected
}) => {
  return (
    <DropdownContainer>
      <Underline onClick={() => openDropdown({ type: isOpen ? false : type })}>
        <Selected isOpen={isOpen}>
          {selected.toLocaleUpperCase()}
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </Selected>
      </Underline>
      <ValuesContainer isOpen={isOpen}>
        {values.map((val, i) => (
          <Value key={i} onClick={() => changeSelected(val)}>
            {val.toLocaleUpperCase()}
          </Value>
        ))}
      </ValuesContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
