// Example component
import React from "react";
import { useDarkMode } from "./DarkModeContext";

function DarkModeToggleButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggleButton;
