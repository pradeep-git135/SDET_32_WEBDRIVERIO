
let lp = require('../pageobjects/vTigerLoginPage')
let cd = require('./../../data/commanData')

// console.log(cd.url);
// console.log(cd.username);
// console.log(cd.password);

describe('loginSuite', () => {
    it('login to vtiger ', async () => {
        await lp.loginToApplication(cd.url, cd.username, cd.password)
        await wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
    });
    it.only('demotest', () => {
        console.log("running it for demo ");
    });
});