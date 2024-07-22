import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, styled } from "@mui/material";
import DarkThemeBox from "./components/DarkThemeBox";
import { useState } from "react";
import { Box } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { WindowSharp } from "@mui/icons-material";

function App() {
  const [darkOn, setDarkOn] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkOn ? "dark" : "light",
    },
  });

  const styledBox = styled(Box)({});

  useGSAP(() => {
    gsap.fromTo(
      "#box1",
      {
        x: 0,
        y: 0,
        repeat: -1,
        // duration: "2s",
        borderRadius: 0,
        yoyo: true,
      },
      {
        x: 250,
        y: window.innerHeight,
        repeat: -1,
        // duration: "2s",
        yoyo: true,
        rotation: 360,
        borderRadius: 100,
        duration: 2,
        ease: "bounce.inOut",
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#box2",
      {
        x: window.innerWidth,
        y: 0,
        z: 1,
        repeat: -1,
        // duration: "2s",
        borderRadius: 0,
        yoyo: true,
      },
      {
        x: 0,
        y: 20,
        z: 2,
        repeat: -1,
        // duration: "2s",
        yoyo: true,
        rotation: 360,
        borderRadius: 100,
        duration: 3,
        ease: "circ.inOut",
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#box3",
      {
        x: window.innerWidth,
        y: window.innerHeight,
        z: 1,
        repeat: -1,
        // duration: "2s",
        borderRadius: 100,
        yoyo: true,
      },
      {
        x: 1000,
        y: 20,
        z: 2,
        repeat: -1,
        // duration: "2s",
        yoyo: true,
        rotation: 360,
        borderRadius: 0,
        duration: 1,
        ease: "circ.inOut",
      }
    );
  }, []);

  let bodyEl = document.getElementsByTagName("body");
  bodyEl[0].style.backgroundColor = `${darkOn ? "" : "#dac8c8"}`;
  console.log(styledBox);
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DarkThemeBox darkOn={darkOn} setDarkOn={setDarkOn} />
        <Box
          id="box1"
          sx={{
            position: "absolute",
            width: "100px",
            height: "100px",
            backgroundColor: "#dac8c8",
            boxShadow: "20px 20px 60px #b9aaaa, -20px -20px 60px #fbe6e6",
          }}
        ></Box>
        <Box
          id="box2"
          sx={{
            position: "absolute",
            width: "100px",
            height: "100px",
            backgroundColor: "#dac8c8",
            boxShadow: "20px 20px 60px #b9aaaa, -20px -20px 60px #fbe6e6",
          }}
        ></Box>

        <Box
          id="box3"
          sx={{
            position: "absolute",
            width: "50px",
            height: "200px",
            backgroundColor: "#dac8c8",
            boxShadow: "20px 20px 60px #b9aaaa, -20px -20px 60px #fbe6e6",
          }}
        ></Box>

        <MultiStepForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
