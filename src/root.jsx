import React, { useState } from "react";
import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";

function Root() {  
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div/>
  return (
    <div className="Root">
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Header />
          <Main themeToggler={themeToggler} theme={theme} />
          <Footer />
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
