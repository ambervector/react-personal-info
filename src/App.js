import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import DarkThemeBox from "./components/DarkThemeBox";
import { useState } from "react";

function App() {
  const [darkOn, setDarkOn] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkOn ? "dark" : "light",
    },
  });

  let bodyEl = document.getElementsByTagName("body");
  bodyEl[0].style.backgroundColor = `${darkOn ? "" : "#e0e0e0"}`;
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DarkThemeBox darkOn={darkOn} setDarkOn={setDarkOn} />
        <MultiStepForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
