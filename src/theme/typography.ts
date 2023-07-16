import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const typography = {
  logo: {
    ...defaultTheme.typography.h5,
    fontWeight: "500",
    color: "#384046",
  },
  thick: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  thin: {
    fontWeight: 100,
  },
};
