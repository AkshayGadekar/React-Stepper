import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const typography = {
  logo: {
    ...defaultTheme.typography.h5,
    fontWeight: "500",
    color: "#384046",
  },
};
