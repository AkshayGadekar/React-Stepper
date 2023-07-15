import React from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { type Theme } from "@mui/material/styles";
import useStyles from "../../../hooks/useStyles";
import MenuItem from "../../utilities/MenuItem";
import menus from "../../../objects/menu";

const ParentMenu = "MY INBOX";

const Menu = () => {
  return (
    <>
      <List sx={{ pt: 0 }}>
        <InboxMenu />
        {menus.map((menu, index) => (
          <MenuItem
            key={menu.label}
            label={menu.label}
            href={menu.href}
            icon={menu.icon}
          />
        ))}
      </List>
    </>
  );
};

export default Menu;

const makeStyles = (theme: Theme, dependencies: any[]) => ({
  listItemButton: {
    justifyContent: "space-between",
  },
  listItemIcon: {
    minWidth: "auto",
    paddingLeft: "0!important",
    transform: "rotate(90deg)",
  },
});

const InboxMenu = () => {
  const styles = useStyles(makeStyles, []);

  return (
    <ListItem key={ParentMenu} disablePadding>
      <ListItemButton sx={styles.listItemButton}>
        <ListItemText primary={ParentMenu} />
        <ListItemIcon sx={styles.listItemIcon}>
          <PlayArrowIcon />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};
