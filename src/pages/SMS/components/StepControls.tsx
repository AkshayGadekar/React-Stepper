import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import SnackBar from "../../../components/utilities/SnackBar";
import { StepControlsProps } from "../../../types/components";
import {
  StepControlsStyles,
  StepControlsStylesDeps,
} from "../../../types/styles";
import { saveIntoLocalStorage } from "../../../functions/helpers";
import { makeStyles, type Theme } from "mui-styles-hook";

const useStyles = makeStyles<StepControlsStyles, StepControlsStylesDeps>(
  (theme: Theme, deps) => ({
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
      display: deps.activeStep !== 0 ? undefined : "none",
      backgroundColor: "#8c97a0",
      "&:hover": {
        backgroundColor: theme.palette.grey[700],
      },
    },
    stepperBackButtonIcon: {
      transform: "rotate(180deg)",
    },
    stepperNextButton: {
      display: deps.activeStep !== 3 ? undefined : "none",
    },
    stepperSubmitButton: {
      display: deps.activeStep === 3 ? undefined : "none",
    },
  })
);

const StepControls = ({
  handleBack,
  activeStep,
  handleNext,
  steps,
  allStepValues,
}: StepControlsProps) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const styles = useStyles({ activeStep });

  const submit = () => {
    saveIntoLocalStorage("allStepValues", allStepValues);
    setOpenSnackbar(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <>
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
              activeStep === steps.length - 1 ? (
                <VisibilityIcon />
              ) : (
                <SendIcon />
              )
            }
            onClick={handleNext}
            sx={styles.stepperNextButton}
          >
            {activeStep === steps.length - 1 ? "Preview" : "Next"}
          </Button>
          <Button
            disableElevation
            variant="contained"
            startIcon={<CheckIcon />}
            onClick={submit}
            sx={styles.stepperSubmitButton}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <SnackBar
        open={openSnackbar}
        handleClose={handleClose}
        message="Data submitted successfully!"
      />
    </>
  );
};

export default StepControls;
