import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import officeImg from "./../../../../media/images/office.png";

const STEP = "Brand Registration";
const STEP_WARNING =
  "Please make sure your business name and federal business ID (EIN for US businesses, Corporation Number for Canadian registered businesses) match exactly. Mismatches (even minor) will result in immediate rejection.";

const Content = () => {
  return (
    <Box sx={{ mb: "1rem" }}>
      <Typography variant="h4" marginBottom="1rem">
        {STEP}
      </Typography>
      <Box component="img" src={officeImg} sx={{ width: "100%", mb: "1rem" }} />
      <Alert severity="error" sx={{ mb: "1rem" }}>
        <Typography variant="body2" color="text.primary">
          {STEP_WARNING}
        </Typography>
      </Alert>
    </Box>
  );
};

export default Content;
