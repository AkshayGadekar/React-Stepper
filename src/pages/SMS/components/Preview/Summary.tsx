import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const Summary = ({ id, step }: { id: string; step: string }) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${id}-content`}
      id={`${id}-header`}
    >
      <Typography variant="body1">{step}</Typography>
    </AccordionSummary>
  );
};

export default Summary;
