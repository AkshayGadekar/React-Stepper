import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

// A custom theme for this app
const theme = createTheme({
  palette,
  typography,
  components,
});

export default theme;
