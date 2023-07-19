import { createTheme, type Components, type Theme } from "@mui/material/styles";
import {
  DRAWER_WIDTH,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  DRAWER_BG_COLOR,
  HEADER_BOTTOM_SHADOW,
  TABLE_BORDER_COLOR,
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
        //backgroundColor: "rgba(0,0,0,0.02)",
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
          boxShadow: HEADER_BOTTOM_SHADOW,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#fff",
        boxShadow: HEADER_BOTTOM_SHADOW,
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
  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
    defaultProps: {
      hiddenLabel: true,
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          color: "#000",
        },
        "&.MuiInputLabel-shrink:not(.MuiInputLabel-outlined)": {
          display: "none",
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => ({
        marginBottom: "1rem",
        "& .MuiTabs-flexContainer": {
          columnGap: "20px",
          [(theme as Theme).breakpoints.up("md")]: {
            columnGap: "40px",
          },
        },
      }),
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
        padding: 0,
        minHeight: "70px",
        "&.Mui-selected": {
          color: (theme as Theme).palette.primary.dark,
        },
        [(theme as Theme).breakpoints.down("sm")]: {
          flexDirection: "column",
          flexGrow: 1,
          flexShrink: 1,
          "& .MuiTypography-root": { padding: "4px 0 4px 0" },
        },
      }),
    },
  },
  MuiStepper: {
    styleOverrides: {
      root: { marginBottom: "1rem" },
    },
  },
  MuiStep: {
    styleOverrides: {
      root: {
        padding: 0,
        "& .MuiStepIcon-text": {
          fill: "#fff",
        },
        "& :is(.Mui-active, .Mui-completed) .MuiTypography-root": {
          fontWeight: "700!important",
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: "#3ea5c2",
        "&.inside-table-cell": {
          color: `${(theme as Theme).palette.primary.main}!important`,
        },
      }),
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: (theme as Theme).palette.grey[500],
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        color: "#fff",
        minWidth: "120px",
        borderRadius: "20px",
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        margin: 0,
        fontWeight: 500,
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        boxShadow: "none",
        border: `solid 1px ${TABLE_BORDER_COLOR}`,
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: "#f4f5f6",
        "& .MuiTableCell-head": {
          color: "#888888",
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        borderBottom: `solid 1px ${TABLE_BORDER_COLOR}`,
      },
    },
  },
};
