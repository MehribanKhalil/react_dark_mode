import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("themeMode")
      ? JSON.parse(localStorage.getItem("themeMode"))
      : false
  );

  function changeThemeMode() {
    document.body.classList.toggle("dark");
    setTheme(!theme);
  }

//   useEffect(() => {
//     theme
//       ? document.body.classList.add("dark")
//       : document.body.classList.remove("dark");
//   }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(theme));
     document.body.classList.toggle("dark", theme) 
  }, [theme]);

  return changeThemeMode;
};

export default useDarkMode;
