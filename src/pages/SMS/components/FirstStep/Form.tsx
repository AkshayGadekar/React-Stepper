import React, { useState, forwardRef, useImperativeHandle } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import { useTheme, type Theme } from "@mui/material/styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import { StepValue } from "./../../../../types/components";
import { ALPHA_REGEX, ALPHA_REGEX_ERROR } from "../../../../config";
import { log, makeStatement } from "../../../../functions/helpers";
import selectOptions from "../../../../objects/verticalOptions";
import selectChecks from "../../../../objects/businessChecks";
import FieldLabel from "../../../../components/utilities/FieldLabel";
import Required from "../../../../components/utilities/Required";
import useStyles from "../../../../hooks/useStyles";

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  checkFormGroup: {
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
    "& .MuiTypography-root": {
      textTransform: "capitalize",
    },
  },
});

const validationSchema = Yup.object().shape({
  business_name: Yup.string()
    .required("Business name is required")
    .min(1, "Minimum 1 characters")
    .max(40, "Maximum 40 characters")
    .matches(ALPHA_REGEX, ALPHA_REGEX_ERROR),
  country: Yup.string()
    .required("Country is required")
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters")
    .matches(/^[A-Za-z]*$/, "Only alphabates are allowed"),
  business_id: Yup.string()
    .required("Business ID is required")
    .min(1, "Minimum 1 characters")
    .max(10, "Maximum 10 characters"),
  vertical: Yup.string().required("Vertical selection is required"),
  stock_symbol: Yup.string()
    .required("Stock Symbol is required")
    .min(1, "Minimum 1 characters")
    .max(10, "Maximum 10 characters"),
  business_type: Yup.object().test(
    "One Business Type has to be checked",
    "Business Type is required",
    (value: Record<string, any> | undefined, ctx) => {
      if (value != undefined) {
        const totalBusinessTypeChecked = Object.keys(value).filter(
          (val: string) => value[val]
        ).length;
        if (totalBusinessTypeChecked == 0) {
          return false;
        }
      }
      return true;
    }
  ),
});

const Form = forwardRef(({ stepValues }: { stepValues: StepValue }, ref) => {
  const theme = useTheme();
  const styles = useStyles(makeStyles, []);

  const [initialValues] = useState({
    business_name: stepValues.values.business_name || "",
    country: stepValues.values.country || "",
    business_id: stepValues.values.business_id || "",
    vertical: stepValues.values.vertical || "",
    stock_symbol: stepValues.values.stock_symbol || "",
    business_type: stepValues.values.business_type || selectChecks,
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting }) => {
      log("values", values);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const business_types = formik.values.business_type;
    const key = event.target.name;
    const isChecked = event.target.checked;
    log("handle", business_types, key, isChecked);
    formik.setFieldValue("business_type", {
      ...business_types,
      [key]: isChecked,
    });
    formik.setFieldTouched("business_type", true, false);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        getStepValues: (): StepValue => {
          const stepState = { isValid: false, values: {} };
          formik.handleSubmit();
          if ((formik.dirty || stepValues.isValid) && formik.isValid) {
            stepState.isValid = true;
            stepState.values = formik.values;
          }
          return stepState;
        },
      };
    },
    [formik.isValid, formik.dirty, formik.values]
  );

  log("formik", formik.values, formik.touched, formik.errors, formik.isValid);

  return (
    <Box sx={{ my: "1rem" }}>
      <Grid container spacing={4} alignItems="flex-end">
        <Grid item md={6} width="100%">
          <FieldLabel
            primaryLabel={
              <>
                Legal business name: <Required />
              </>
            }
            secondaryLabel={
              <>
                (Please make sure your business name matches with IRS records)
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
            {...formik.getFieldProps("business_name")}
            error={
              formik.touched.business_name && formik.errors.business_name
                ? true
                : false
            }
            helperText={
              formik.touched.business_name &&
              (formik.errors.business_name as string)
            }
          />
        </Grid>
        <Grid item md={6} width="100%">
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
            {...formik.getFieldProps("country")}
            error={
              formik.touched.country && formik.errors.country ? true : false
            }
            helperText={
              formik.touched.country && (formik.errors.country as string)
            }
          />
        </Grid>
        <Grid item md={6} width="100%">
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
            {...formik.getFieldProps("business_id")}
            error={
              formik.touched.business_id && formik.errors.business_id
                ? true
                : false
            }
            helperText={
              formik.touched.business_id &&
              (formik.errors.business_id as string)
            }
          />
          <Link href="#" variant="body2">
            Don't have EIN?
          </Link>
        </Grid>
        <Grid item md={6} alignSelf="flex-start" width={"100%"}>
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
            {...formik.getFieldProps("vertical")}
            error={
              formik.touched.vertical && formik.errors.vertical ? true : false
            }
            helperText={
              formik.touched.vertical && (formik.errors.vertical as string)
            }
          >
            {selectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={6} width="100%">
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
            {...formik.getFieldProps("stock_symbol")}
            error={
              formik.touched.stock_symbol && formik.errors.stock_symbol
                ? true
                : false
            }
            helperText={
              formik.touched.stock_symbol &&
              (formik.errors.stock_symbol as string)
            }
          />
        </Grid>
        <Grid item md={6} alignSelf="flex-end" width="100%">
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
            error={
              formik.touched.business_type && formik.errors.business_type
                ? true
                : false
            }
            component="fieldset"
            variant="standard"
          >
            <FormGroup sx={styles.checkFormGroup}>
              {Object.keys(formik.values.business_type).map((business) => (
                <FormControlLabel
                  key={business}
                  control={
                    <Checkbox
                      checked={
                        formik.values.business_type[
                          business as keyof typeof formik.values.business_type
                        ]
                      }
                      onChange={handleChange}
                      name={business}
                    />
                  }
                  label={makeStatement(business)}
                  componentsProps={{
                    typography: {
                      variant: "body2",
                      color: theme.palette.grey[600],
                    },
                  }}
                />
              ))}
            </FormGroup>
            <FormHelperText>
              {formik.touched.business_type &&
                (formik.errors.business_type as string)}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
});

export default Form;
