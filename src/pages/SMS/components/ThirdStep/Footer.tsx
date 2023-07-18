import React, { useState, forwardRef, useImperativeHandle } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useTheme, type Theme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import { StepValue } from "./../../../../types/components";
import useStyles from "../../../../hooks/useStyles";
import { TABLE_BORDER_COLOR } from "../../../../config";

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  columnGap: "10px",
  pt: "1rem",
  "& .MuiCheckbox-root": {
    p: 0,
  },
  "& .MuiTypography-root": {
    cursor: "pointer",
  },
});

const PAYMENT_INFO =
  "All charges will appear on your statement this way Phone.com. We'll use this payment method on file for the account. Your payment information is encrypted and processed on a secure server.";

const Footer = forwardRef(({ stepValues }: { stepValues: StepValue }, ref) => {
  const [checked, setChecked] = useState(true);
  const [error, setError] = useState("");
  const styles = useStyles(makeStyles, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        getStepValues: (): StepValue => {
          const stepState = { isValid: false, values: {} };
          if (!checked) {
            setError("Please accept terms and conditions");
            return stepState;
          }
          stepState.isValid = true;
          stepState.values = { terms_check: true };
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
      <Box sx={styles}>
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
      <FormHelperText error>{error}</FormHelperText>
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
