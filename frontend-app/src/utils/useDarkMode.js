import { useLayoutEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  const getTheme = () => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  };

  useLayoutEffect(getTheme, []);

  return [theme, themeToggler];
};
