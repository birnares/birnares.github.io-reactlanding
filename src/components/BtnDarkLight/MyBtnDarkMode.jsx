/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";
import "./MyBtnDarkMode.css";

const MyBtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  // change dark mode through system properties
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);
  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };
  const btnSun = "dark-mode-btn";
  const btnMoon = "dark-mode-btn dark-mode-btn--active";

  return (
    <>
      <button
        className={darkMode === "dark" ? btnMoon : btnSun}
        onClick={toggleDarkMode}
      >
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
    </>
  );
};

export default MyBtnDarkMode;
