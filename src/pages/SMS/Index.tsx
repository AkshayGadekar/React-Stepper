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
import SecondStep from "./components/SecondStep/Index";
import ThirdStep from "./components/ThirdStep/Index";
import Preview from "./components/Preview/Index";
import { STEPPER_BOX_BOTTOM_SHADOW } from "./../../config";
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
      <Tabs />
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
