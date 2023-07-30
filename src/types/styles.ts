import { type SX } from "mui-styles-hook";

export interface DrawerStyles {
  temporaryDrawer: SX;
  permanentDrawer: SX;
}
export interface DrawerStylesDeps {
  hideDrawer: boolean;
}

export interface InboxMenuStyles {
  listItemButton: SX;
  listItemIcon: SX;
}

export interface UserStyles {
  box: SX;
}

export interface UserInfoStyles {
  container: SX;
  userName: SX;
  companyTitle: SX;
}

export interface HeaderStyles {
  toolbar: SX;
  appBar: SX;
}
export interface HeaderStylesDeps {
  hideDrawer: boolean;
}

export interface IconButtonContainerStyles {
  iconStyles: SX;
  IconButtonStyles: SX;
}
export interface IconButtonContainerStylesDeps {
  bgColor: string;
}

export interface IconContainerStyles {
  iconContainer: SX;
  icon: SX;
}

export interface StepControlsStyles {
  stepperFooter: SX;
  stepperControlsContainer: SX;
  stepperBackButton: SX;
  stepperBackButtonIcon: SX;
  stepperNextButton: SX;
  stepperSubmitButton: SX;
}
export interface StepControlsStylesDeps {
  activeStep: number;
}

export interface FirstStepStyles {
  checkFormGroup: SX;
}

export interface PreviewAccordionDetailsStyles {
  list: SX;
  listItemTextAsLabel: SX;
  listItemTextAsValue: SX;
}

export interface ThirdStepFooterStyles {
  checkContainer: SX;
}

export interface ThirdStepPeriodTableStyles {
  tableContainer: SX;
  tableRow: SX;
  lastTableRow: SX;
  lastTableCell: SX;
}

export interface ThirdStepTaxesTableStyles {
  tableContainer: SX;
  tableRow: SX;
  icon: SX;
  lastTableRow: SX;
  lastTableCell: SX;
}

export interface ThirdStepTotalCountTableStyles {
  tableContainer: SX;
  tableRow: SX;
  lastTableCell: SX;
}
