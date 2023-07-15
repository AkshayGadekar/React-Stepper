import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { drawerWidth } from "./objects/objects";

const defaultTheme = createTheme();

const primaryColor = "#00c325";
const secondaryColor = "#daf5da";
const headerBottomShadow =
  "0px 2px 10px 2px rgb(0 0 0 / 1%), 0px 4px 10px 6px rgb(0 0 0 / 1%)";
const drawerBackgroundColor = "#f4f5f6";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    logo: {
      ...defaultTheme.typography.h5,
      fontWeight: "bold",
      color: "#384046",
    },
  },
  components: {
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
        },
      },
    },
  },
});

export default theme;
