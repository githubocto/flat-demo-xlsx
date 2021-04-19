import {
  xlsx,
  readXLSX,
  writeCSV,
} from "https://deno.land/x/flat@0.0.8/mod.ts";

const inputFilename = Deno.args[0];
const outputFilename = inputFilename.replace(".xlsx", ".csv");

const workbook = await readXLSX(inputFilename);
const sheetData = workbook.Sheets[workbook.SheetNames[2]];
const csvString = await xlsx.utils.sheet_to_csv(sheetData);

await writeCSV(outputFilename, csvString);
