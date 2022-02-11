// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { xlsx, readXLSX, writeCSV } from "https://deno.land/x/flat@0.0.14/mod.ts";

// Get the downloaded_filename as the first argument
const inputFilename = Deno.args[0];
const outputFilename = inputFilename.replace(".xlsx", ".csv");

// read about what the xlsx library can do here: https://github.com/SheetJS/sheetjs

const workbook = await readXLSX(inputFilename);
const sheetData = workbook.Sheets[workbook.SheetNames[2]];
const csvString = await xlsx.utils.sheet_to_csv(sheetData); // can use to_json, to_txt, to_html, to_formulae

// write to csv
await writeCSV(outputFilename, csvString);
