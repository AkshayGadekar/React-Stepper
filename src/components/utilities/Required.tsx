import React from "react";
import Typography from "@mui/material/Typography";

const Required = () => {
  return (
    <Typography component="span" display="inline" color="error">
      *
    </Typography>
  );
};

export default Required;
