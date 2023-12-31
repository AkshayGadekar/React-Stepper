import React, { useState, forwardRef, useImperativeHandle } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import { StepValue } from "./../../../../types/components";
import { ThirdStepFooterStyles } from "./../../../../types/styles";
import { makeStyles, type Theme } from "mui-styles-hook";
import {
  TABLE_BORDER_COLOR,
  TOTAL_CHARGES_LABEL,
  TOTAL_CHARGES,
} from "../../../../config";

const useStyles = makeStyles<ThirdStepFooterStyles>({
  checkContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    pt: "1rem",
    "& .MuiCheckbox-root": {
      position: "relative",
      bottom: "10px",
    },
    "& .MuiTypography-root": {
      cursor: "pointer",
    },
  },
});

const PAYMENT_INFO =
  "All charges will appear on your statement this way Abc.co. We'll use this payment method on file for the account. Your payment information is encrypted and processed on a secure server.";

const Footer = forwardRef(({ stepValues }: { stepValues: StepValue }, ref) => {
  const [checked, setChecked] = useState(
    stepValues.values.terms_check !== undefined
      ? (stepValues.values.terms_check as boolean)
      : true
  );
  const [error, setError] = useState("");
  const styles = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setChecked(checked);
    if (checked) {
      setError("");
    }
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        getStepValues: (direction: "back" | "next" = "next"): StepValue => {
          const stepState: StepValue = { isValid: false, values: {} };
          stepState.values[TOTAL_CHARGES_LABEL] = TOTAL_CHARGES;

          if (direction === "back") {
            stepState.isValid = checked;
            stepState.values.terms_check = checked;
            return stepState;
          }

          if (!checked) {
            setError("Please accept terms and conditions");
            return stepState;
          }

          stepState.isValid = true;
          stepState.values.terms_check = true;
          return stepState;
        },
      };
    },
    [checked]
  );

  return (
    <Box>
      <Typography
        variant="body2"
        fontStyle={"italic"}
        borderBottom={`1px solid ${TABLE_BORDER_COLOR}`}
        pb={1}
      >
        {PAYMENT_INFO}
      </Typography>
      <Box sx={styles.checkContainer}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "aceept terms" }}
          id="termsCheck"
        />
        <Typography component="label" htmlFor="termsCheck" variant="body2">
          I understand that my use of the services is governed by the{" "}
          <PrimaryColorInlineText text={"Terms of Service"} /> or Master
          Services Agreement,{" "}
          <PrimaryColorInlineText text={"Accepted Use Policy"} />, and{" "}
          <PrimaryColorInlineText text={"SMS Message Policy"} />.
        </Typography>
      </Box>
      <FormHelperText error sx={{ pl: 1.5 }}>
        {error}
      </FormHelperText>
    </Box>
  );
});

export default Footer;

const PrimaryColorInlineText = ({ text }: { text: string }) => {
  const theme = useTheme();
  return (
    <Box component="span" color={theme.palette.primary.main}>
      {text}
    </Box>
  );
};
