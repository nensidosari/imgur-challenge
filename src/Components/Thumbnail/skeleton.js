import React from "react";

import { ThumbnailSkeleton } from "./styles";

const skeleton = ({ height, color }) => (
  <ThumbnailSkeleton height={height} color={color} />
);

export default skeleton;
