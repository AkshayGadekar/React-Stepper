import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { ResponsiveDrawer } from "../types/hooks";

const useResponsiveDrawer = (): ResponsiveDrawer => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideDrawer, setHideDrawer] = useState(false);
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    if (!matchesSM) {
      setHideDrawer(!hideDrawer);
    } else {
      setMobileOpen(!mobileOpen);
    }
  };

  return [mobileOpen, hideDrawer, handleDrawerToggle];
};

export default useResponsiveDrawer;
