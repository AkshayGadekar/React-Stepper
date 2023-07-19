export const DRAWER_WIDTH: number = Number(process.env.REACT_APP_DRAWER_WIDTH);

export const PRIMARY_COLOR: string = `#${process.env.REACT_APP_PRIMARY_COLOR}`;

export const SECONDARY_COLOR: string = `#${process.env.REACT_APP_SECONDARY_COLOR}`;

export const DRAWER_BG_COLOR: string = `#${process.env.REACT_APP_DRAWER_BACKGROUND_COLOR}`;

export const HEADER_BOTTOM_SHADOW: string =
  "0px 2px 10px 2px rgb(0 0 0 / 1%), 0px 4px 10px 6px rgb(0 0 0 / 1%)";

export const STEPPER_BOX_BOTTOM_SHADOW: string =
  "0 15px 21px -10px rgb(0 0 0 / 20%)";

export const TABLE_BORDER_COLOR: string = "rgba(224, 224, 224, 1)";

export const ALPHA_REGEX = new RegExp(/^[a-zA-Z0-9\s\-_]*$/);
export const ALPHA_REGEX_ERROR =
  "Only alphanumeric characters with space, hyphen or dash are allowed";

export const ALPHABET_REGEX = new RegExp(/^[A-Za-z]*$/);
export const ALPHABET_REGEX_ERROR = "Only alphabates are allowed";

export const COMPARISON_REGEX = new RegExp(/^[^\<\>]+$/);
export const COMPARISON_REGEX_ERROR =
  "Less than or greater than symbols are not allowed";

export const PHONE_REGEX = new RegExp(
  /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,6}$/
);
export const PHONE_REGEX_ERROR = "Invalid phone number";

export const WEBSITE_REGEX = new RegExp(
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
);
export const WEBSITE_REGEX_ERROR = "Invalid website URL";

export const TOTAL_CHARGES_LABEL = "Total charges to Credit Card";
export const TOTAL_CHARGES = "$4.60";
