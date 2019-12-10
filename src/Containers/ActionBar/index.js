import React, { useState } from "react";

import { Dropdown, Checkbox, Pagination } from "../../Components/index";

import { ActionDiv } from "./styles";

export const dropdownValues = [
  { type: "section", values: ["hot", "top", "user"] },
  { type: "sort", values: ["viral", "top", "time", "rising"] },
  { type: "window", values: ["day", "week", "month", "year", "all"] }
];

const ActionBar = ({ getImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    section: "hot",
    sort: "viral",
    window: "day",
    page: 1
  });
  const [showViral, setShowViral] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10);

  const sendPageRequest = page => {
    setSelected({ ...selected, page });
    getImages(
      { ...selected, page },
      { ...(selected.section !== "user" ? {} : showViral) }
    );
  };
  const handlePageButtonClick = name => {
    let currPage = currentPage;

    switch (name) {
      case "next": {
        currPage = currentPage + 1;

        setCurrentPage(prevPage => prevPage + 1);
        return sendPageRequest(currPage);
      }
      case "prev": {
        currPage = currentPage - 1;
        setCurrentPage(prevPage => prevPage - 1);
        return sendPageRequest(currPage);
      }
      case "start": {
        currPage = 1;
        setCurrentPage(1);
        return sendPageRequest(currPage);
      }
      case "end": {
        currPage = totalPages;
        setCurrentPage(totalPages);
        return sendPageRequest(currPage);
      }
      default:
        return sendPageRequest(currPage);
    }
  };

  const changeSelected = ({ val, type }) => {
    setSelected({ ...selected, [type]: val });
    setIsOpen(false);

    getImages(
      { ...selected, [type]: val },
      { ...(selected.section !== "user" ? {} : showViral) }
    );
  };

  return (
    <ActionDiv>
      {dropdownValues
        .filter(value =>
          selected.section === "top" ? true : value.type !== "window"
        )
        .map(({ type, values }, i) => (
          <Dropdown
            key={i}
            className={type}
            type={type}
            id={type}
            values={
              type === "sort" && selected.section !== "user"
                ? values.filter(val => val !== "rising")
                : values
            }
            selected={selected[type]}
            openDropdown={({ type }) => setIsOpen(type)}
            isOpen={isOpen === type}
            changeSelected={val => changeSelected({ val, type })}
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

      <Pagination
        handlePageButtonClick={handlePageButtonClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </ActionDiv>
  );
};

export default ActionBar;
