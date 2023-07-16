import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

const SearchInput = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) => {
  return (
    <Box sx={{ display: "flex", columnGap: "4px" }}>
      <ToggleDrawer handleDrawerToggle={handleDrawerToggle} />
      <TextField
        label="Search..."
        id="search"
        type="search"
        size="small"
        InputProps={{
          sx: {
            paddingRight: "6px",
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchInput;

const ToggleDrawer = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) => {
  return (
    <IconButton
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
    </IconButton>
  );
};
