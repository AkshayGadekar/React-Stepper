import React, { useMemo } from "react";
import { type Theme, useTheme } from "@mui/material/styles";

const useStyles = (
  func: (theme: Theme, dependencies: any[]) => Record<string, any>,
  dependencies: any[]
) => {
  const theme = useTheme();

  const styles = useMemo(() => {
    return func(theme, dependencies);
  }, dependencies);

  return styles;
};

export default useStyles;
