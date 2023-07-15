import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { drawerWidth } from "../../../objects/objects";
import type { HeaderProps } from "../../../types/components";

const Index = ({ handleDrawerToggle, hideDrawer }: HeaderProps) => {
  const styles = {
    width: { sm: `calc(100% - ${!hideDrawer ? drawerWidth : 0}px)` },
    ml: { sm: `${!hideDrawer ? drawerWidth : 0}px` },
  };

  return (
    <AppBar position="fixed" sx={styles}>
      <Toolbar>
        <TextField
          label="Search..."
          id="search"
          type="search"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Index;

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    handleClose();
  };

  return (
    <Box ml={"auto"}>
      <Button
        onClick={handleClick}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ cursor: "pointer" }}
      >
        <Avatar src="/broken-image.jpg" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};
