import * as process from "process";

export const apiKey = process.env?.API_KEY || import.meta.env?.VITE_API_KEY;
