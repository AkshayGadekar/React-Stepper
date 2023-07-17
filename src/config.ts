export const DRAWER_WIDTH: number = Number(process.env.REACT_APP_DRAWER_WIDTH);

export const PRIMARY_COLOR: string = `#${process.env.REACT_APP_PRIMARY_COLOR}`;

export const SECONDARY_COLOR: string = `#${process.env.REACT_APP_SECONDARY_COLOR}`;

export const DRAWER_BG_COLOR: string = `#${process.env.REACT_APP_DRAWER_BACKGROUND_COLOR}`;

export const HEADER_BOTTOM_SHADOW: string =
  "0px 2px 10px 2px rgb(0 0 0 / 1%), 0px 4px 10px 6px rgb(0 0 0 / 1%)";

export const STEPPER_BOX_BOTTOM_SHADOW: string =
  "0 15px 21px -10px rgb(0 0 0 / 20%)";

export const ALPHA_REGEX = new RegExp(/^[a-zA-Z0-9\s\-_]*$/);

export const ALPHA_REGEX_ERROR =
  "Only alphanumeric characters with space, hyphen or dash are allowed";
