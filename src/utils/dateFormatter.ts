import { DateTimeFormatOptions } from "intl";

export const dateFormatter = (inputString: string) => {
  const inputDate = new Date(inputString);
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const output = inputDate.toLocaleDateString("en-US", options);
  return inputString === "" ? "Unknown" : output;
};
