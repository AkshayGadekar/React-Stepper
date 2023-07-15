import { createTheme, type Components } from "@mui/material/styles";
import {
  drawerWidth,
  primaryColor,
  secondaryColor,
  drawerBackgroundColor,
  headerBottomShadow,
} from "../config";

const defaultTheme = createTheme();

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        color: "inherit",
      },
      body: {
        "& #nprogress": {
          pointerEvents: "none",
          "& > div[role=bar]": {
            backgroundColor: secondaryColor,
            position: "fixed",
            zIndex: "2001",
            top: 0,
            left: 0,
            width: "100%",
            height: "3px",
          },
        },
      },
      main: {
        backgroundColor: "rgba(0,0,0,0.02)",
        height: "100vh",
        marginLeft: "auto",
        "& .page": {
          padding: "1rem",
        },
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        [defaultTheme.breakpoints.up("sm")]: {
          minHeight: "80px",
        },
        "&.logoToolbar": {
          backgroundColor: drawerBackgroundColor,
          boxShadow: headerBottomShadow,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#fff",
        boxShadow: headerBottomShadow,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        columnGap: "1.5rem",
        "&.active": {
          backgroundColor: secondaryColor,
        },
        "& .MuiListItemIcon-root": {
          minWidth: "auto",
          paddingLeft: "2rem",
        },
        "& .MuiListItemText-root": {
          flexGrow: 0,
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        boxSizing: "border-box",
        border: 0,
        backgroundColor: drawerBackgroundColor,
        width: drawerWidth,
        "& .menu-list .MuiTypography-root": {
          fontWeight: 100,
        },
      },
    },
  },
};
