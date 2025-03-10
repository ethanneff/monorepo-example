import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize(Dimensions.get("window"));
    updateSize(); // Get initial size on mount

    const sub = Dimensions.addEventListener("change", updateSize);
    return () => {
      sub.remove();
    };
  }, []);

  return size;
};
