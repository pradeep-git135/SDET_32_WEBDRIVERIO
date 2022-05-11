
var xlsx = require("xlsx");

var wb  = xlsx.readFile('./data/testSpecificData.xlsx')

let totalSheets = wb.SheetNames
// console.log(totalSheets);

let ws = wb.Sheets['Sheet1'];
// console.log(ws);

let excelData = xlsx.utils.sheet_to_json(ws)

console.log(excelData);

console.log(excelData[0].url);
console.log(excelData[0].username);
console.log(excelData[0].password);