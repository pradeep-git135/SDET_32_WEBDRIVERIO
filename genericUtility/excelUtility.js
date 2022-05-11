var xlsx = require("xlsx");

function getExcelData(filePath, sheetName) {
    var wb  = xlsx.readFile(filePath)  //'./data/testSpecificData.xlsx'

    let totalSheets = wb.SheetNames
    // console.log(totalSheets);

    let ws = wb.Sheets[sheetName];  //'Sheet1'
// console.log(ws);

    let excelData = xlsx.utils.sheet_to_json(ws)

    return excelData
  
}

module.exports = getExcelData
// console.log(getExcelData('./data/testSpecificData.xlsx', 'Sheet1'));