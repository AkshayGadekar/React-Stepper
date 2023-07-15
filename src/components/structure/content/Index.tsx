import React from "react";
import type { ContentProps } from "../../../types/components";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { drawerWidth } from "../../../objects/objects";
import Page from "../../routes/Navigations";

const Index = ({ hideDrawer }: ContentProps) => {
  return (
    <Box
      component="main"
      sx={{
        width: { sm: `calc(100% - ${!hideDrawer ? drawerWidth : 0}px)` },
      }}
    >
      <Toolbar />
      <Page />
    </Box>
  );
};

export default Index;
