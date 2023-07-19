import React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import steps from "../../../../objects/steps";
import { StepValues } from "../../../../types/components";
import {
  log,
  makeStatement,
  makeSingleWord,
  filterValue,
} from "../../../../functions/helpers";
import Summary from "./Summary";
import Details from "./Details";

const Index = ({ allStepValues }: { allStepValues: StepValues }) => {
  const allStepValuesInArray = Object.values(allStepValues);

  return (
    <Box>
      <Typography variant="h5" color="primary" mb={1} fontWeight="bold">
        PREVIEW
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <>
        {allStepValuesInArray.map((stepValues: Record<string, any>, index) => {
          const step = steps[index];
          const id = makeSingleWord(step);

          const summary = <Summary id={id} step={step} />;

          const valuesInArray = Object.entries(stepValues.values);

          const details = valuesInArray.map((values) => {
            const label = makeStatement(values[0]);
            const value = filterValue(values[1]);

            if (typeof value !== "object") {
              return <Details key={label} label={label} value={value} />;
            } else {
              const newValuesInArray = Object.entries(value as object);
              const newDetails = newValuesInArray.map((newValues) => {
                const label = makeStatement(newValues[0]);
                const value = filterValue(newValues[1]);
                return <Details key={label} label={label} value={value} />;
              });
              return newDetails;
            }
          });
          return (
            <Accordion key={id}>
              {summary}
              {details}
            </Accordion>
          );
        })}
      </>
    </Box>
  );
};

export default Index;
