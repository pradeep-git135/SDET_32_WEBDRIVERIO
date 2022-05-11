
let lp = require('../pageobjects/vTigerLoginPage')
let cd = require('./../../data/commanData')
let excelData = require('../../genericUtility/excelUtility')

let arrayJson = excelData('./data/testSpecificData.xlsx', 'Sheet1')

console.log(arrayJson);

// console.log(cd.url);
// console.log(cd.username);
// console.log(cd.password);

describe('loginSuite', () => {
    it.only('login to vtiger ', async () => {
        // from json
        // await lp.loginToApplication(cd.url, cd.username, cd.password)

        //from exceldata
        await lp.loginToApplication(arrayJson[0].url, arrayJson[0].username, arrayJson[0].password)
        await wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
    });
    it('demotest', () => {
        console.log("running it for demo ");
    });
});