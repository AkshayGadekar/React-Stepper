import * as React from "react";
import Container from "@mui/material/Container";
import useResponsiveDrawer from "./hooks/useResponsiveDrawer";
import Header from "./components/structure/header/Index";
import Content from "./components/structure/content/Index";
import Drawer from "./components/structure/drawer/Index";

const App = () => {
  const [mobileOpen, hideDrawer, handleDrawerToggle] = useResponsiveDrawer();

  return (
    <Container maxWidth={"xl"} disableGutters>
      <Header hideDrawer={hideDrawer} handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        hideDrawer={hideDrawer}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Content hideDrawer={hideDrawer} />
    </Container>
  );
};

export default App;
