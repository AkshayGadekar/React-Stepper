import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "./components/Tabs";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SendIcon from "@mui/icons-material/Send";
import StepControls from "./components/StepControls";
import { useTheme } from "@mui/material/styles";
import useStepper from "../../hooks/useStepper";
import StepperBar from "./components/StepperBar";
import steps from "./../../objects/steps";
import FirstStep from "./components/FirstStep/Index";
import Preview from "./components/Preview/Index";
import { STEPPER_BOX_BOTTOM_SHADOW } from "./../../config";
import FieldLabel from "./../../components/utilities/FieldLabel";
import Required from "./../../components/utilities/Required";

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
      <Tabs />
      <Box
        sx={{
          boxShadow: (theme) => STEPPER_BOX_BOTTOM_SHADOW,
        }}
      >
        <Box sx={{ padding: { xs: 2, sm: 3, lg: 4 } }}>
          {activeStep == 0 && <FirstStep />}
          {activeStep == steps.length && <Preview handleReset={handleReset} />}
        </Box>
        {activeStep === steps.length ? (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box> */}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <StepControls
              handleBack={handleBack}
              activeStep={activeStep}
              handleNext={handleNext}
              steps={steps}
            />
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                my: "1rem",
                backgroundColor: "#f4f5f6",
                p: 3,
                justifyContent: "flex-end",
              }}
            >
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
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
            </Box> */}
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
};
