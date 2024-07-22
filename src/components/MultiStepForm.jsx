import React, { useState, useEffect } from "react";
import StepButton from "@mui/material/StepButton";
import { useSpring, animated } from "@react-spring/web";

import { Container, Paper, Stepper, Step, Button, Box } from "@mui/material";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import Confirmation from "./Confirmation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const steps = ["Personal Information", "Address Information", "Confirmation"];

const MultiStepForm = () => {
  const [darkTheme, setDarkTheme] = useState(true);
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
  const [completed, setCompleted] = React.useState({});

  const [errors, setErrors] = useState({});

  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000 }, // Set the duration to 1000ms (1 second)
  });

  useGSAP(() => {
    gsap.from(".btn", {
      y: 800,
      rotation: 360,
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  const AnimatedPaper = animated(Paper);

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

  const handleStep = (step) => () => {
    if (validateForm()) {
      setActiveStep(step);
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (activeStep === 0) {
      if (!formData.name) tempErrors.name = "Name is required";
      if (!formData.email) tempErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        tempErrors.email = "Email is invalid";
      if (!formData.phone) tempErrors.phone = "Phone is required";
      else if (!/^\d{10}$/.test(formData.phone))
        tempErrors.phone = "Phone is required";
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

  //  sx={{

  //     }}
  return (
    <Container component="main" maxWidth="sm">
      <AnimatedPaper
        id="animatedPaper"
        style={props}
        variant="elevation"
        elevation={3}
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          background: "#dac8c8",
          boxShadow: "20px 20px 60px #b9aaaa, -20px -20px 60px #fbe6e6",
        }}
      >
        <Stepper
          sx={{ flexWrap: { xs: "wrap", sm: "nowrap" } }}
          nonLinear
          activeStep={activeStep}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton onClick={handleStep(index)}>{label}</StepButton>
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
            {!activeStep ? (
              <Button
                className="btn"
                disabled
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            ) : (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}

            {activeStep === steps.length - 1 ? (
              <Button
                className="btn"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                className="btn"
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </AnimatedPaper>
    </Container>
  );
};

export default MultiStepForm;
