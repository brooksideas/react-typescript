import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export const Box = () => {
  const theme = useContext(ThemeContext);
  const [current, toggleStyle] = useState<boolean | null>(null);
  const handletoggle = () => {
    if (current) {
      toggleStyle(false);
    } else {
      toggleStyle(true);
    }
  };
  return (
    <div
      style={{
        backgroundColor: current ? theme.primary.main : theme.secondary.main,
        color: current ? theme.primary.text : theme.secondary.text,
      }}
    >
      Theme Context
      <button onClick={handletoggle}> toggleStyle </button>
    </div>
  );
};
