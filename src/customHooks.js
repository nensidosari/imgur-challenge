import { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export { useWindowSize };
