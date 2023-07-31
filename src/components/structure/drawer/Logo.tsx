import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../../media/images/logo.png";

const Logo = () => {
  return (
    <Toolbar className={"logoToolbar"}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LogoImg />
        <CompanyTitle />
      </Box>
    </Toolbar>
  );
};

export default Logo;

const LogoImg = () => <Box component="img" src={logo} />;

const CompanyTitle = () => (
  <Typography variant="logo" ml={1}>
    Abc.co
  </Typography>
);
