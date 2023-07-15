import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import type { Theme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchInput from "./SearchInput";
import { drawerWidth } from "../../../config";
import type { HeaderProps } from "../../../types/components";
import useStyles from "../../../hooks/useStyles";
import Options from "./Options";

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  toolbar: {
    justifyContent: "space-between",
    columnGap: ".5rem",
  },
  appBar: {
    width: { sm: `calc(100% - ${!dependencies[0] ? drawerWidth : 0}px)` },
    ml: { sm: `${!dependencies[0] ? drawerWidth : 0}px` },
  },
});

const Index = ({ handleDrawerToggle, hideDrawer }: HeaderProps) => {
  const styles = useStyles(makeStyles, [hideDrawer]);

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <SearchInput handleDrawerToggle={handleDrawerToggle} />
        <Options />
      </Toolbar>
    </AppBar>
  );
};

export default Index;
