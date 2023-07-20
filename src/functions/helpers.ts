export const log = (...params: any[]): void => {
  const debug = process.env.REACT_APP_APP_DEBUG;
  if (debug != "true") return;
  console.log(...params);
};

export const convertHexToRGBA = (hexCode: string, opacity: number = 1) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

export const makeStatement = (value: string) => {
  const newValue = value.replaceAll("_", " ");
  return newValue;
};

export const makeSingleWord = (value: string) => {
  const newValue = value.replaceAll(" ", "-");
  return newValue;
};

export const filterValue = (value: any) => {
  const valueType = typeof value;
  let newValue = value;
  if (valueType === "boolean") {
    newValue = value === true ? "TRUE" : "FALSE";
  } else if (value === "") {
    newValue = "-";
  }

  return newValue;
};

export const saveIntoLocalStorage = (key: string, value: any) => {
  const newValue = JSON.stringify(value);
  localStorage.setItem(key, newValue);
};

export const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value === undefined || value === null) {
    return null;
  }
  return JSON.parse(value);
};
