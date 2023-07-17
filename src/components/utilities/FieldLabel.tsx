import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import type { FieldLabelProps } from "./../../types/components";

const FieldLabel = ({ primaryLabel, secondaryLabel }: FieldLabelProps) => {
  return (
    <Box sx={{ mb: 0.5 }}>
      <Typography display="block" variant="thick" color="text.primary">
        {primaryLabel}
      </Typography>
      {secondaryLabel && (
        <Typography variant="body2" color="text.primary">
          {secondaryLabel}
        </Typography>
      )}
    </Box>
  );
};

export default FieldLabel;
