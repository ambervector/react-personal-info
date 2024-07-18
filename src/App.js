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
