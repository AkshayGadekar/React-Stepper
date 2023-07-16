import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import type { MenuItemProps, MenuItemIconProps } from "../../types/components";

const MenuItem = (props: MenuItemProps<MenuItemIconProps>) => {
  const Icon = props.icon;

  let navigation = {};
  if (props.href) {
    navigation = {
      component: NavLink,
      to: props.href,
      end: true,
    };
  }

  return (
    <ListItem key={props.label} disablePadding>
      <ListItemButton {...navigation}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ variant: "thin" }}
          primary={props.label}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
