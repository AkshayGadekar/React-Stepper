import React from "react";
import Box from "@mui/material/Box";
import { IconContainerProps } from "../../types/components";
import useStyles from "../../hooks/useStyles";
import { type Theme } from "@mui/material/styles";

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  iconContainer: {
    mb: "0!important",
    fontSize: 0,
    borderRadius: "50%",
  },
  icon: {
    mb: "0!important",
  },
});

const IconContainer = ({
  icon,
  bgColor,
  color,
  iconStyles,
  IconContainerStyles,
}: IconContainerProps) => {
  const styles = useStyles(makeStyles, []);
  const Icon = icon;
  return (
    <Box
      sx={{
        bgcolor: bgColor,
        ...styles.iconContainer,
        ...IconContainerStyles,
      }}
    >
      <Icon
        sx={{
          color: color,
          ...styles.icon,
          ...iconStyles,
        }}
      />
    </Box>
  );
};

export default IconContainer;
