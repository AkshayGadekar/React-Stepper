import React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Logo from "./Logo";
import Menu from "./Menu";
import type { DrawerProps } from "../../../types/components";
import User from "./User";
import { makeStyles, type Theme } from "mui-styles-hook";
import { DrawerStyles, DrawerStylesDeps } from "../../../types/styles";

const useStyles = makeStyles<DrawerStyles, DrawerStylesDeps>(
  (theme: Theme, deps) => ({
    temporaryDrawer: {
      display: { xs: "block", md: "none" },
    },
    permanentDrawer: {
      display: { xs: "none", md: !deps.hideDrawer ? "block" : "none" },
    },
  })
);

const Index = ({ mobileOpen, handleDrawerToggle, hideDrawer }: DrawerProps) => {
  const styles = useStyles({ hideDrawer });

  return (
    <Box component="nav">
      <MuiDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={styles.temporaryDrawer}
      >
        <DrawerComponent />
      </MuiDrawer>
      <MuiDrawer variant="permanent" open sx={styles.permanentDrawer}>
        <DrawerComponent />
      </MuiDrawer>
    </Box>
  );
};

export default Index;

const DrawerComponent = () => (
  <Box>
    <Logo />
    {/* <Divider /> */}
    <User />
    <Menu />
  </Box>
);
