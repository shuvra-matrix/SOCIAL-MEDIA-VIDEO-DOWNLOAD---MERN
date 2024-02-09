import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = (props) => {
  const localThemeMode =
    localStorage.getItem("theme") === "dark"
      ? true
      : localStorage.getItem("theme") === "light"
      ? false
      : true;
  const [isDrakMode, setIsDarkMode] = useState(localThemeMode);

  const themeControler = () => {
    setIsDarkMode((pre) => !pre);
  };

  const theme = isDrakMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeControler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
