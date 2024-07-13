import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
} from "@mui/material";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import Confirmation from "./Confirmation";

const steps = ["Personal Information", "Address Information", "Confirmation"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (validateForm()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateForm = () => {
    let tempErrors = {};
    if (activeStep === 0) {
      if (!formData.name) tempErrors.name = "Name is required";
      if (!formData.email) tempErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        tempErrors.email = "Email is invalid";
      if (!formData.phone) tempErrors.phone = "Phone is required";
    } else if (activeStep === 1) {
      if (!formData.address1)
        tempErrors.address1 = "Address Line 1 is required";
      if (!formData.city) tempErrors.city = "City is required";
      if (!formData.state) tempErrors.state = "State is required";
      if (!formData.zipCode) tempErrors.zipCode = "Zip Code is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Form submitted successfully");
      localStorage.removeItem("formData");
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 3 }}>
          {activeStep === 0 && (
            <PersonalInformation
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {activeStep === 1 && (
            <AddressInformation
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {activeStep === 2 && <Confirmation formData={formData} />}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default MultiStepForm;
