import * as process from "process";
console.log(process.env);
// export const apiKey = import.meta.env.VITE_API_KEY;
export const apiKey = process.env.API_KEY;
