import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import officeImg from "./../../../../media/images/office.png";

const STEP = "Address & Contact Details";
const Content = () => {
  return (
    <Box sx={{ mb: "1rem" }}>
      <Typography variant="h4" marginBottom="1rem">
        {STEP}
      </Typography>
      <Box component="img" src={officeImg} sx={{ width: "100%", mb: "1rem" }} />
    </Box>
  );
};

export default Content;
