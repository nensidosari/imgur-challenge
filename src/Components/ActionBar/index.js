import React, { useState } from "react";

import { Dropdown, Checkbox } from "../index";

import { ActionDiv } from "./styles";

const dropdownValues = [
  { type: "section", values: ["hot", "top", "user"] },
  { type: "sort", values: ["viral", "top", "time", "rising"] },
  { type: "window", values: ["day", "week", "month", "year", "all"] }
];

const ActionBar = ({ getImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    section: "hot",
    window: "day",
    sort: "viral"
  });
  const [showViral, setShowViral] = useState(true);

  return (
    <ActionDiv>
      {dropdownValues
        .filter(value =>
          selected.section === "top" ? true : value.type !== "window"
        )
        .map(({ type, values }, i) => (
          <Dropdown
            key={i}
            type={type}
            values={
              type === "sort" && selected.section !== "user"
                ? values.filter(val => val !== "rising")
                : values
            }
            selected={selected[type]}
            openDropdown={({ type }) => setIsOpen(type)}
            isOpen={isOpen === type}
            changeSelected={val => {
              setSelected({ ...selected, [type]: val });
              setIsOpen(false);

              getImages(
                { ...selected, [type]: val },
                { ...(selected.section !== "user" ? {} : showViral) }
              );
            }}
          />
        ))}
      {selected.section === "user" && (
        <Checkbox
          changeParam={() => {
            getImages({ ...selected }, { showViral: !showViral });
            setShowViral(!showViral);
          }}
          showViral={showViral}
        />
      )}
    </ActionDiv>
  );
};

export default ActionBar;
