import React from "react";
import Box from "@mui/material/Box";
import Tabs from "./components/Tabs";
import useStepper from "../../hooks/useStepper";
import StepperBar from "./components/StepperBar";
import Steps from "./components/Steps";

const Index = () => {
  return (
    <Box className="page">
      <HorizontalLinearStepper />
    </Box>
  );
};

export default Index;

const HorizontalLinearStepper = () => {
  const [
    activeStep,
    skipped,
    isStepOptional,
    isStepSkipped,
    handleNext,
    handleBack,
    handleSkip,
    handleReset,
  ] = useStepper();

  return (
    <Box sx={{ width: "100%", p: { xs: 1, md: 2, lg: 3 } }}>
      <StepperBar activeStep={activeStep} />
      {/* <Tabs /> */}
      <Steps
        stepperHookParams={[
          activeStep,
          skipped,
          isStepOptional,
          isStepSkipped,
          handleNext,
          handleBack,
          handleSkip,
          handleReset,
        ]}
      />
    </Box>
  );
};
