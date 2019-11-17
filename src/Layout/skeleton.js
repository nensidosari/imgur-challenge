import React from "react";

import { ThumbnailSkeleton } from "../Components/index";

const Skeleton = ({ columns }) => {
  const orderThumbnailSkeleton = () => {
    let currentColumn = 0;
    const columnsImages = [];
    let height = 300;
    const colors = [
      "rgb(198, 193, 255)",
      "rgb(100, 50, 249)",
      "rgb(67, 208, 189)",
      "rgb(255, 125, 0)",
      "rgb(34, 126, 250)",
      "rgb(28, 44, 93)"
    ];

    Array(20)
      .fill()
      .map(arr => {
        if (!columnsImages[currentColumn]) columnsImages[currentColumn] = [];

        let color = Math.floor(Math.random() * 6);
        columnsImages[currentColumn].push({ height, color: colors[color] });
        currentColumn = currentColumn === columns - 1 ? 0 : currentColumn + 1;
        height = height === 300 ? 200 : 300;
        return {};
      });

    return columnsImages;
  };

  return (
    <>
      {orderThumbnailSkeleton().map((column, i) => (
        <div key={i}>
          {column.map(({ height, color }, i) => (
            <ThumbnailSkeleton key={i} height={height} color={color} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Skeleton;
