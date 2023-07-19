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

export interface Tabs {
  label: string;
  icon: React.ComponentType<{ sx: Record<string, any> }>;
}
[];

export interface IconButtonContainerProps {
  icon: React.ComponentType<{ sx: Record<string, any> }>;
  bgColor: string;
  iconStyles?: Record<string, any>;
  IconButtonStyles?: Record<string, any>;
}

export interface IconContainerProps {
  icon: React.ComponentType<{ sx: Record<string, any> }>;
  bgColor: string;
  color: string;
  iconStyles?: Record<string, any>;
  IconContainerStyles?: Record<string, any>;
}

export interface FieldLabelProps {
  primaryLabel: JSX.Element;
  secondaryLabel?: JSX.Element;
}

export interface StepControlsProps {
  handleBack: () => void;
  activeStep: number;
  handleNext: () => void;
  steps: string[];
  allStepValues: StepValues;
}

export interface StepValue {
  isValid: boolean;
  values: Record<string, any>;
}

export interface StepValues {
  firstStep: StepValue;
  secondStep: StepValue;
  thirdStep: StepValue;
}

export interface SnackBarProps {
  open: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  message: string;
}
