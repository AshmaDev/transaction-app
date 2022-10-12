type Classes = string | null;
export const classNames = (...classes: Classes[]) => classes.filter(Boolean).join(" ");