import React from "react";
import { Box } from "@mui/material";

import FormStepper from "./FormStepper";

const details = {
  fullName: "",
  email: "",
  phone: "",
  add1: "",
  add2: "",
  city: "",
  state: "",
  zipcode: "",
};

function Form() {
  function handleSubmit() {
    console.log("Form Submitted!!");
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormStepper formDetails={details} />
    </Box>
  );
}

export default Form;
