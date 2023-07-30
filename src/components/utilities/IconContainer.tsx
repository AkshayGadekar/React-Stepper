import React from "react";
import Box from "@mui/material/Box";
import { IconContainerProps } from "../../types/components";
import { IconContainerStyles } from "../../types/styles";
import { makeStyles, type Theme } from "mui-styles-hook";

const useStyles = makeStyles<IconContainerStyles>({
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
  const styles = useStyles();
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
