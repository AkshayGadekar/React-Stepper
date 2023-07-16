import { createTheme, type Components, type Theme } from "@mui/material/styles";
import {
  DRAWER_WIDTH,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  DRAWER_BG_COLOR,
  HEADER_BOTTOM_SHADONW,
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
            backgroundColor: SECONDARY_COLOR,
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
          backgroundColor: DRAWER_BG_COLOR,
          boxShadow: HEADER_BOTTOM_SHADONW,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#fff",
        boxShadow: HEADER_BOTTOM_SHADONW,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        columnGap: "1.5rem",
        "&.active": {
          backgroundColor: SECONDARY_COLOR,
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
        backgroundColor: DRAWER_BG_COLOR,
        width: DRAWER_WIDTH,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#000",
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          color: "#000",
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        marginBottom: "1rem",
        "& .MuiTabs-flexContainer": {
          columnGap: "40px",
        },
      },
      indicator: ({ ownerState, theme }) => ({
        height: "4px",
        borderRadius: "10px",
        backgroundColor: (theme as Theme).palette.primary.dark,
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        flexDirection: "row",
        textTransform: "capitalize",
        alignItems: "center",
        columnGap: "10px",
        paddingLeft: 0,
        paddingRight: 0,
        "&.Mui-selected": {
          color: (theme as Theme).palette.primary.dark,
        },
      }),
    },
  },
  MuiStepper: {
    styleOverrides: {
      root: { marginBottom: "1rem", width: "75%" },
    },
  },
  MuiStep: {
    styleOverrides: {
      root: {
        //flexGrow: 0,
        padding: 0,
        "& .MuiStepIcon-text": {
          fill: "#fff",
        },
      },
    },
  },
};
