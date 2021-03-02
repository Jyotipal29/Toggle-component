import "./styles.css";

import React, { useState } from "react";

export default function Darkmode() {
  const [isDarkMode, setDarkMode] = useState(false);
  let styleDarkMode = {
    backgroundColor: "black",
    color: "white"
  };
  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };

  const getStyle = () => {
    if (isDarkMode) {
      return styleDarkMode;
    }
    return {};
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={getStyle()}>
        <h1> Dark/Light Mode</h1>

        <button
          style={{
            margin: "2rem"
          }}
          onClick={handleToggle}
        >
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}
