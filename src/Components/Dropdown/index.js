import React from "react";

import {
  DropdownContainer,
  Selected,
  Underline,
  ValuesContainer,
  Value,
  Icon
} from "./styles";

const Dropdown = ({
  type,
  values = [],
  selected = "",
  openDropdown,
  isOpen = false,
  changeSelected
}) => {
  return (
    <DropdownContainer>
      <Underline
        onClick={() => openDropdown({ type: isOpen ? false : type })}
        className={`${type}_open_dropdown_handler`}
      >
        <Selected>
          {selected && selected.toString().toLocaleUpperCase()}
          <Icon
            className="fa fa-angle-down"
            aria-hidden="true"
            isOpen={isOpen}
          ></Icon>
        </Selected>
      </Underline>
      <ValuesContainer isOpen={isOpen}>
        {values.map((val, i) => (
          <Value
            key={i}
            onClick={() => changeSelected(val)}
            className={`dropdown_value ${type}_${val}`}
          >
            {val && val.toString().toLocaleUpperCase()}
          </Value>
        ))}
      </ValuesContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
