import React from "react";
import IconButton from "@mui/material/IconButton";
import { type Theme, useTheme } from "@mui/material/styles";
import useStyles from "../../hooks/useStyles";
import type { IconButtonContainerProps } from "../../types/components";
import { convertHexToRGBA } from "../../functions/helpers";

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  iconStyles: {
    color: "#fff",
  },
  IconButtonStyles: {
    borderRadius: "50%",
    padding: "8px",
    backgroundColor: dependencies[0],
    "&:hover": {
      backgroundColor: convertHexToRGBA(dependencies[0], 0.7),
    },
  },
});

const IconButtonContainer = ({
  icon,
  bgColor,
  iconStyles,
  IconButtonStyles,
}: IconButtonContainerProps) => {
  const theme = useTheme();
  const styles = useStyles(makeStyles, [bgColor]);
  const Icon = icon;
  return (
    <IconButton
      sx={{
        ...styles.IconButtonStyles,
        ...IconButtonStyles,
      }}
    >
      <Icon
        sx={{
          ...styles.iconStyles,
          ...iconStyles,
        }}
      />
    </IconButton>
  );
};

export default IconButtonContainer;
