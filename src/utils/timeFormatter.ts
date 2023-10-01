export const timeFormatter = (inputMinutes: number) => {
  const hours = Math.floor(inputMinutes / 60);
  const minutes = inputMinutes % 60;
  const output = `${hours}h ${minutes}m`;

  return inputMinutes === 0 ? "Unknown" : output;
};
