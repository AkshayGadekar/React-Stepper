import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppsIcon from "@mui/icons-material/Apps";
import NightlightIcon from "@mui/icons-material/Nightlight";
import IconButtonContainer from "../../utilities/IconButtonContainer";

const Options = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: { xs: ".5rem", md: "1rem" },
      }}
    >
      <IconButtonContainer
        icon={AppsIcon}
        bgColor={theme.palette.primary.main}
        iconStyles={{}}
        IconButtonStyles={{}}
      />
      <Divider orientation="vertical" flexItem />
      <IconButtonContainer
        icon={NightlightIcon}
        bgColor={theme.palette.grey[400]}
        iconStyles={{
          transform: "rotate(-45deg)",
        }}
        IconButtonStyles={{}}
      />
    </Box>
  );
};

export default Options;
