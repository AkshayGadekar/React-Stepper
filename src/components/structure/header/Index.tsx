import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchInput from "./SearchInput";
import { DRAWER_WIDTH } from "../../../config";
import type { HeaderProps } from "../../../types/components";
import { makeStyles, type Theme } from "mui-styles-hook";
import { HeaderStyles, HeaderStylesDeps } from "../../../types/styles";
import Options from "./Options";

const useStyles = makeStyles<HeaderStyles, HeaderStylesDeps>(
  (theme: Theme, deps) => ({
    toolbar: {
      justifyContent: "space-between",
      columnGap: ".5rem",
    },
    appBar: {
      width: { md: `calc(100% - ${!deps.hideDrawer ? DRAWER_WIDTH : 0}px)` },
      ml: { md: `${!deps.hideDrawer ? DRAWER_WIDTH : 0}px` },
    },
  })
);

const Index = ({ handleDrawerToggle, hideDrawer }: HeaderProps) => {
  const styles = useStyles({ hideDrawer });

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
