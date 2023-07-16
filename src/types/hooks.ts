export type ResponsiveDrawer = [boolean, boolean, () => void];

export type Stepper = [
  number,
  Set<number>,
  (step: number) => boolean,
  (step: number) => boolean,
  () => void,
  () => void,
  () => void,
  () => void
];
