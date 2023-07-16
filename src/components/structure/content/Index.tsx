import React from "react";
import type { ContentProps } from "../../../types/components";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { DRAWER_WIDTH } from "../../../config";
import Page from "../../routes/Navigations";

const Index = ({ hideDrawer }: ContentProps) => {
  return (
    <Box
      component="main"
      sx={{
        width: { sm: `calc(100% - ${!hideDrawer ? DRAWER_WIDTH : 0}px)` },
      }}
    >
      <Toolbar />
      <Page />
    </Box>
  );
};

export default Index;
