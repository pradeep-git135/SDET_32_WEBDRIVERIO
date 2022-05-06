let lp = require('../pageobjects/vTigerLoginPage')
let hp = require('../pageobjects/vTigerHomePage')

describe('loginSuite', () => {
    it('login to vtiger and logout ', async () => {
        await lp.loginToApplication('admin', 'admin')
        await wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
        await hp.logout()
    });
});