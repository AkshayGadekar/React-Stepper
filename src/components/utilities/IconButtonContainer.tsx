import React from "react";
import IconButton from "@mui/material/IconButton";
import { makeStyles, type Theme } from "mui-styles-hook";
import {
  IconButtonContainerStyles,
  IconButtonContainerStylesDeps,
} from "../../types/styles";
import type { IconButtonContainerProps } from "../../types/components";
import { convertHexToRGBA } from "../../functions/helpers";

const useStyles = makeStyles<
  IconButtonContainerStyles,
  IconButtonContainerStylesDeps
>((theme: Theme, deps) => ({
  iconStyles: {
    color: "#fff",
  },
  IconButtonStyles: {
    borderRadius: "50%",
    padding: "8px",
    backgroundColor: deps.bgColor,
    "&:hover": {
      backgroundColor: convertHexToRGBA(deps.bgColor, 0.7),
    },
  },
}));

const IconButtonContainer = ({
  icon,
  bgColor,
  iconStyles,
  IconButtonStyles,
}: IconButtonContainerProps) => {
  const styles = useStyles({ bgColor });
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
