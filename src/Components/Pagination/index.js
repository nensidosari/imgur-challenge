import React from "react";

import { Button } from "../";

import { Flex, CurrentPage } from "./styles";

export const buttonIconsRight = {
  next: "fa fa-angle-right",
  end: "fa fa-angle-double-right"
};
export const buttonIconsLeft = {
  start: "fa fa-angle-double-left",
  prev: "fa fa-angle-left"
};

const Pagination = ({
  handlePageButtonClick,
  totalPages = 10,
  currentPage = 1
}) => {
  const renderButtonsLeft = () =>
    Object.keys(buttonIconsLeft).map(key => (
      <Button
        disabled={currentPage === 1}
        key={key}
        icon={buttonIconsLeft[key]}
        iconPosition="left"
        name={key}
        onClickButton={handlePageButtonClick}
      />
    ));
  const renderButtonsRight = () =>
    Object.keys(buttonIconsRight).map(key => (
      <Button
        disabled={totalPages === currentPage}
        key={key}
        icon={buttonIconsRight[key]}
        iconPosition="right"
        name={key}
        onClickButton={handlePageButtonClick}
      />
    ));
  return (
    <Flex>
      {renderButtonsLeft()}
      <CurrentPage>{currentPage}</CurrentPage>
      {renderButtonsRight()}
    </Flex>
  );
};

export default Pagination;
