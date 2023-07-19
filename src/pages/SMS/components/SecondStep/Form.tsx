import React, { useState, forwardRef, useImperativeHandle } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { StepValue } from "./../../../../types/components";
import {
  PHONE_REGEX,
  PHONE_REGEX_ERROR,
  WEBSITE_REGEX,
  WEBSITE_REGEX_ERROR,
  COMPARISON_REGEX,
  COMPARISON_REGEX_ERROR,
} from "../../../../config";
import { log } from "../../../../functions/helpers";
import cityStateOptions from "../../../../objects/cityStateOptions";
import postalCodeOptions from "../../../../objects/postalCodeOptions";
import FieldLabel from "../../../../components/utilities/FieldLabel";
import Required from "../../../../components/utilities/Required";

const validationSchema = Yup.object().shape({
  business_address: Yup.string()
    .nullable()
    .max(50, "Maximum 50 characters")
    .matches(COMPARISON_REGEX, COMPARISON_REGEX_ERROR),
  city_state: Yup.string().nullable(),
  postal_code: Yup.string().nullable(),
  primary_phone_number: Yup.string()
    .nullable()
    .matches(PHONE_REGEX, PHONE_REGEX_ERROR),
  support_phone_number: Yup.string()
    .nullable()
    .matches(PHONE_REGEX, PHONE_REGEX_ERROR),
  business_website: Yup.string()
    .nullable()
    .matches(WEBSITE_REGEX, WEBSITE_REGEX_ERROR)
    .matches(COMPARISON_REGEX, COMPARISON_REGEX_ERROR),
  support_email: Yup.string().required().email("invalid email address"),
});

const Form = forwardRef(
  (
    {
      stepValues,
      handleSubmit,
    }: { stepValues: StepValue; handleSubmit: () => void },
    ref
  ) => {
    const [initialValues] = useState({
      business_address: stepValues.values.business_address || "",
      city_state: stepValues.values.city_state || "",
      postal_code: stepValues.values.postal_code || "",
      primary_phone_number: stepValues.values.primary_phone_number || "",
      support_phone_number: stepValues.values.support_phone_number || "",
      business_website: stepValues.values.business_website || "",
      support_email: stepValues.values.support_email || "",
    });

    const formik = useFormik({
      initialValues,
      validationSchema,
      validateOnBlur: true,
      onSubmit: async (values, { setSubmitting }) => {
        log("values", values);
      },
    });

    const submitForm = (e: React.FormEvent) => {
      e.preventDefault();
      handleSubmit();
    };

    useImperativeHandle(ref, () => {
      return {
        getStepValues: (direction: "back" | "next" = "next"): StepValue => {
          const stepState = { isValid: false, values: {} };

          if (direction === "back") {
            stepState.isValid = formik.isValid;
            stepState.values = formik.values;
            return stepState;
          }

          formik.handleSubmit();
          if ((formik.dirty || stepValues.isValid) && formik.isValid) {
            stepState.isValid = true;
            stepState.values = formik.values;
          }
          return stepState;
        },
      };
    });

    log("formik", formik.values, formik.touched, formik.errors);

    return (
      <Box sx={{ my: "1rem" }} component="form" onSubmit={submitForm}>
        <Grid container spacing={4} alignItems="flex-end">
          <Grid item md={6} width="100%">
            <FieldLabel primaryLabel={<>Business Address:</>} />
            <TextField
              id="businessAddress"
              variant="filled"
              fullWidth
              placeholder="Number of Office/Plot/Building"
              size="medium"
              {...formik.getFieldProps("business_address")}
              error={
                formik.touched.business_address &&
                formik.errors.business_address
                  ? true
                  : false
              }
              helperText={
                formik.touched.business_address &&
                (formik.errors.business_address as string)
              }
            />
          </Grid>
          <Grid
            item
            md={6}
            width="100%"
            container
            gap="10px"
            direction="row"
            sx={{ "& > *": { flexGrow: 1 } }}
          >
            <TextField
              id="cityState"
              variant="filled"
              label="Enter City, State"
              size="medium"
              select
              {...formik.getFieldProps("city_state")}
              error={
                formik.touched.city_state && formik.errors.city_state
                  ? true
                  : false
              }
              helperText={
                formik.touched.city_state &&
                (formik.errors.city_state as string)
              }
            >
              {cityStateOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="postalCode"
              variant="filled"
              label="Postal Code"
              size="medium"
              select
              {...formik.getFieldProps("postal_code")}
              error={
                formik.touched.postal_code && formik.errors.postal_code
                  ? true
                  : false
              }
              helperText={
                formik.touched.postal_code &&
                (formik.errors.postal_code as string)
              }
            >
              {postalCodeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={6} width="100%">
            <FieldLabel
              primaryLabel={<>Primary business phone:</>}
              secondaryLabel={<>(For business verification purposes)</>}
            />
            <TextField
              id="primaryPhone"
              variant="filled"
              fullWidth
              placeholder="Enter primary phone number"
              size="medium"
              {...formik.getFieldProps("primary_phone_number")}
              error={
                formik.touched.primary_phone_number &&
                formik.errors.primary_phone_number
                  ? true
                  : false
              }
              helperText={
                formik.touched.primary_phone_number &&
                (formik.errors.primary_phone_number as string)
              }
            />
          </Grid>
          <Grid item md={6} width="100%">
            <FieldLabel
              primaryLabel={<>Support phone number:</>}
              secondaryLabel={<>(Give alternate phone number)</>}
            />
            <TextField
              id="supportPhone"
              variant="filled"
              fullWidth
              placeholder="Enter support phone number"
              size="medium"
              {...formik.getFieldProps("support_phone_number")}
              error={
                formik.touched.support_phone_number &&
                formik.errors.support_phone_number
                  ? true
                  : false
              }
              helperText={
                formik.touched.support_phone_number &&
                (formik.errors.support_phone_number as string)
              }
            />
          </Grid>
          <Grid item md={6} width="100%">
            <FieldLabel primaryLabel={<>Business website:</>} />
            <TextField
              id="businessWebsite"
              variant="filled"
              fullWidth
              placeholder="Enter business website"
              size="medium"
              {...formik.getFieldProps("business_website")}
              error={
                formik.touched.business_website &&
                formik.errors.business_website
                  ? true
                  : false
              }
              helperText={
                formik.touched.business_website &&
                (formik.errors.business_website as string)
              }
            />
          </Grid>
          <Grid item md={6} width="100%">
            <FieldLabel
              primaryLabel={
                <>
                  Support email: <Required />
                </>
              }
            />
            <TextField
              id="supportEmail"
              required
              variant="filled"
              fullWidth
              placeholder="Enter Email Id"
              size="medium"
              {...formik.getFieldProps("support_email")}
              error={
                formik.touched.support_email && formik.errors.support_email
                  ? true
                  : false
              }
              helperText={
                formik.touched.support_email &&
                (formik.errors.support_email as string)
              }
            />
          </Grid>
          <Grid item md={6} width="100%" display="none">
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
);

export default Form;
