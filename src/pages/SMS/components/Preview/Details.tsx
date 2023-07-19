import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useStyles from "../../../../hooks/useStyles";
import { type Theme } from "@emotion/react";

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  list: {
    "& .MuiListItem-root": { py: 0 },
  },
  listItemTextAsLabel: {
    flexBasis: "40%",
    "& .MuiTypography-root": {
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },
  listItemTextAsValue: {
    flexBasis: "60%",
  },
});

const Details = ({ label, value }: { label: string; value: string }) => {
  const styles = useStyles(makeStyles, []);
  return (
    <AccordionDetails>
      <List sx={styles.list}>
        <ListItem alignItems="flex-start">
          <ListItemText primary={label} sx={styles.listItemTextAsLabel} />
          <ListItemText
            primary={value as string}
            sx={styles.listItemTextAsValue}
          />
        </ListItem>
      </List>
    </AccordionDetails>
  );
};

export default Details;
