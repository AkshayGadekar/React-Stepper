import React from "react";
import Box from "@mui/material/Box";
import { log } from "../functions/helpers";

const Dashboard = () => {
  log("Dashboard rendered");

  return <Box className="page">Dashboard</Box>;
};

export default Dashboard;
