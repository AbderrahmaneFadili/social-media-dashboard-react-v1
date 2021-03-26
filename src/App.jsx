import React, { useState } from "react";
import GlobalStyle from "./Themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes/themes";
import Dashborad from "./components/Dashboard/Dashborad";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Dashborad theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
};

export default App;
