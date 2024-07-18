import React from "react";
import { Box, styled } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import Tooltip from "@mui/material/Tooltip";

export default function DarkThemeBox({ darkOn, setDarkOn }) {
  function darkModeToggle() {
    setDarkOn((prevState) => !prevState);
  }
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      mt={3}
    >
      {darkOn ? <BedtimeIcon /> : <LightModeIcon />}
      <Tooltip
        title={`Switch it ${darkOn ? "OFF" : "ON"} for ${
          darkOn ? "Light" : "Dark"
        } Mode!`}
      >
        <Switch defaultChecked onChange={darkModeToggle} />
      </Tooltip>
    </Box>
  );
}
