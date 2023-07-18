import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { StepControlsProps } from "../../../types/components";
import { type Theme } from "@mui/material/styles";
import useStyles from "../../../hooks/useStyles";

const makeStyles = (theme: Theme, dependencies: any[]) => {
  return {
    stepperFooter: {
      display: "flex",
      flexDirection: "row",
      my: "1rem",
      backgroundColor: "#f4f5f6",
      p: 3,
      justifyContent: "flex-end",
    },
    stepperControlsContainer: {
      display: "flex",
      columnGap: "1rem",
      alignItems: "center",
    },
    stepperBackButton: {
      display: dependencies[0] !== 0 ? undefined : "none",
      backgroundColor: "#8c97a0",
      "&:hover": {
        backgroundColor: theme.palette.grey[700],
      },
    },
    stepperBackButtonIcon: {
      transform: "rotate(180deg)",
    },
    stepperNextButton: {
      display: dependencies[0] !== 3 ? undefined : "none",
    },
  };
};

const StepControls = ({
  handleBack,
  activeStep,
  handleNext,
  steps,
}: StepControlsProps) => {
  const styles = useStyles(makeStyles, [activeStep]);

  return (
    <Box sx={styles.stepperFooter}>
      <Box sx={styles.stepperControlsContainer}>
        <Button
          disableElevation
          variant="contained"
          startIcon={<SendIcon sx={styles.stepperBackButtonIcon} />}
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={styles.stepperBackButton}
        >
          Back
        </Button>
        <Button
          disableElevation
          variant="contained"
          endIcon={
            activeStep === steps.length - 1 ? <VisibilityIcon /> : <SendIcon />
          }
          onClick={handleNext}
          sx={styles.stepperNextButton}
        >
          {activeStep === steps.length - 1 ? "Preview" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default StepControls;
