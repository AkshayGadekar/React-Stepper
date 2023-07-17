import React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { type Theme } from "@mui/material/styles";
import Logo from "./Logo";
import Menu from "./Menu";
import type { DrawerProps } from "../../../types/components";
import User from "./User";
import useStyles from "../../../hooks/useStyles";

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  temporaryDrawer: {
    display: { xs: "block", md: "none" },
  },
  permanentDrawer: {
    display: { xs: "none", md: !dependencies[0] ? "block" : "none" },
  },
});

const Index = ({ mobileOpen, handleDrawerToggle, hideDrawer }: DrawerProps) => {
  const styles = useStyles(makeStyles, [hideDrawer]);

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
