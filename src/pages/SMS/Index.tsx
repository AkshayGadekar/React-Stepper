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
import { useTheme } from "@mui/material/styles";
import useStepper from "../../hooks/useStepper";
import StepperBar from "./components/StepperBar";
import steps from "./../../objects/steps";
import FirstStepInfo from "./components/FirstStepInfo";
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

const options = [
  {
    value: "first",
    label: "VERTICAl-01",
  },
  {
    value: "second",
    label: "VERTICAl-02",
  },
  {
    value: "third",
    label: "VERTICAl-03",
  },
  {
    value: "fourth",
    label: "VERTICAl-04",
  },
];

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

  const theme = useTheme();

  const [checks, setChecks] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
    michael: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecks({
      ...checks,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine, michael } = checks;
  const error = [gilad, jason, antoine, michael].filter((v) => v).length !== 2;

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <StepperBar activeStep={activeStep} />
      <Tabs />
      <Box
        sx={{
          boxShadow: (theme) => "0 15px 21px -10px rgb(0 0 0 / 20%)",
        }}
      >
        <Box sx={{ padding: "2rem" }}>
          <FirstStepInfo />
          <Box sx={{ my: "1rem" }}>
            <Grid container spacing={4} alignItems="flex-end">
              <Grid item xs={6}>
                <FieldLabel
                  primaryLabel={
                    <>
                      Legal business name: <Required />
                    </>
                  }
                  secondaryLabel={
                    <>
                      (Please make sure your business name matches with IRS
                      records)
                    </>
                  }
                />
                <TextField
                  id="businessName"
                  required
                  variant="filled"
                  fullWidth
                  placeholder="Enter Legal business name"
                  size="medium"
                />
              </Grid>
              <Grid item xs={6}>
                <FieldLabel
                  primaryLabel={
                    <>
                      Country of registration: <Required />
                    </>
                  }
                />
                <TextField
                  id="country"
                  required
                  variant="filled"
                  fullWidth
                  placeholder="Enter Country of registration"
                  size="medium"
                />
              </Grid>
              <Grid item xs={6}>
                <FieldLabel
                  primaryLabel={
                    <>
                      Federal business ID: <Required />
                    </>
                  }
                  secondaryLabel={<>(EIN for US, Corporation # for CA)</>}
                />
                <TextField
                  id="businessID"
                  required
                  variant="filled"
                  fullWidth
                  placeholder="Enter Federal business ID"
                  size="medium"
                />
                <Link href="#" variant="body2">
                  Don't have EIN?
                </Link>
              </Grid>
              <Grid item xs={6} alignSelf="flex-start">
                <FieldLabel
                  primaryLabel={
                    <>
                      Vertical: <Required />
                    </>
                  }
                  secondaryLabel={<>Select one</>}
                />
                <TextField
                  id="vertical"
                  required
                  variant="filled"
                  fullWidth
                  label="Select Vertical"
                  size="medium"
                  select
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <FieldLabel
                  primaryLabel={<>Stock symbol:</>}
                  secondaryLabel={
                    <>
                      (<Required />
                      For publicly traded company only)
                    </>
                  }
                />
                <TextField
                  id="stockSymbol"
                  required
                  variant="filled"
                  fullWidth
                  placeholder="Enter stock symbol"
                  size="medium"
                />
              </Grid>
              <Grid item xs={6} alignSelf="flex-end">
                <FieldLabel
                  primaryLabel={
                    <>
                      Business type: <Required />
                    </>
                  }
                  secondaryLabel={<>(Select business type you own)</>}
                />
                <FormControl
                  required
                  error={error}
                  component="fieldset"
                  sx={{}}
                  variant="standard"
                >
                  <FormGroup
                    sx={{
                      flexDirection: "row",
                      "& > .MuiFormControlLabel-root": {
                        flexBasis: "50%",
                        m: 0,
                      },
                      "& .MuiCheckbox-root": {
                        paddingLeft: 0,
                        paddingBottom: 0,
                      },
                      "& .MuiFormControlLabel-root": { alignItems: "flex-end" },
                    }}
                  >
                    {Object.keys(checks).map((check) => (
                      <FormControlLabel
                        key={check}
                        control={
                          <Checkbox
                            checked={checks[check as keyof typeof checks]}
                            onChange={handleChange}
                            name={check}
                          />
                        }
                        label={check}
                        componentsProps={{
                          typography: {
                            variant: "body1",
                            color: theme.palette.grey[600],
                          },
                        }}
                      />
                    ))}
                  </FormGroup>
                  {/* <FormHelperText>You can display an error</FormHelperText> */}
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
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
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
};
