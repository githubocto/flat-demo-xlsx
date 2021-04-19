import {
  xlsx,
  readXLSX,
  writeCSV,
} from "https://deno.land/x/flat@0.0.6/mod.ts";

const inputFilename = Deno.args[0];
const outputFilename = inputFilename.replace(".xlsx", ".csv");

const workbook = await readXLSX(inputFilename);
console.log(workbook)
const sheetData = workbook.Sheets[workbook.SheetNames[2]];
console.log(sheetData)
const csvString = await xlsx.utils.sheet_to_csv(sheetData);
console.log(csvString)

await writeCSV(outputFilename, csvString);
