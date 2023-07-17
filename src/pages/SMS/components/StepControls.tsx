import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { StepControlsProps } from "../../../types/components";

const StepControls = ({
  handleBack,
  activeStep,
  handleNext,
  steps,
}: StepControlsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        my: "1rem",
        backgroundColor: "#f4f5f6",
        p: 3,
        justifyContent: "flex-end",
      }}
    >
      {/* {isStepOptional(activeStep) && (
        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            Skip
        </Button>
        )} */}
      <Box sx={{ display: "flex", columnGap: "1rem" }}>
        <Button
          disableElevation
          color="secondary"
          variant="contained"
          startIcon={<SendIcon sx={{ transform: "rotate(180deg)" }} />}
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{ display: activeStep !== 0 ? "block" : "none" }}
        >
          Back
        </Button>
        <Button
          disableElevation
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleNext}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default StepControls;
