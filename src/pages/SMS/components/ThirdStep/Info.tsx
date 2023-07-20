import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

const STEP = "Brand Registration Payment Confirmation";
const STEP_WARNING =
  "TCR feels are non-refundable and are set by mobile carriers and their registrar. Phone.com is not charging any additional fees or TCS registration and pays a portion of the per-message carrier fees for our customer.";

const Info = () => {
  return (
    <Box sx={{ mb: "1rem" }}>
      <Typography variant="h4" marginBottom="1rem">
        {STEP}
      </Typography>
      <Alert severity="error" sx={{ mb: "1rem" }}>
        <Typography variant="body2" color="text.primary">
          {STEP_WARNING}
        </Typography>
      </Alert>
    </Box>
  );
};

export default Info;
