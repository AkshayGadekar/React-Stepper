import React from "react";
import List from "@mui/material/List";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles, type Theme } from "mui-styles-hook";
import { InboxMenuStyles } from "../../../types/styles";
import MenuItem from "../../utilities/MenuItem";
import menus from "../../../objects/menu";

const PARENT_MENU = "MY INBOX";

const Menu = () => {
  return (
    <>
      <List sx={{ pt: 0 }} className="menu-list">
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

const useStyles = makeStyles<InboxMenuStyles>({
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
  const styles = useStyles();

  return (
    <ListItem key={PARENT_MENU} disablePadding>
      <ListItemButton sx={styles.listItemButton}>
        <ListItemText
          primary={PARENT_MENU}
          primaryTypographyProps={{ variant: "thin" }}
        />
        <ListItemIcon sx={styles.listItemIcon}>
          <PlayArrowIcon />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};
