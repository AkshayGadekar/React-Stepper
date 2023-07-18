import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import steps from "./../../../objects/steps";

const StepperBar = ({ activeStep }: { activeStep: number }) => {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{ width: { xs: "100%", lg: "60%" } }}
    >
      {steps.map((label, index) => {
        const stepProps: { completed?: boolean } = {};
        const labelProps: {
          optional?: React.ReactNode;
        } = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>
              <Typography variant="thin">{label}</Typography>
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default StepperBar;
