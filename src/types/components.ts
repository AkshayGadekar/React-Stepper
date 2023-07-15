export interface HeaderProps {
  handleDrawerToggle: () => void;
  hideDrawer: boolean;
}

export interface DrawerProps {
  mobileOpen: boolean;
  hideDrawer: boolean;
  handleDrawerToggle: () => void;
}

export interface ContentProps {
  hideDrawer: boolean;
}

export interface MenuItemIconProps {}

export interface Menu {
  label: string;
  icon: React.ComponentType<MenuItemIconProps>;
  href: string;
}

export interface MenuItemProps<T> {
  label: string;
  icon: React.ComponentType<T>;
  href: string;
}
