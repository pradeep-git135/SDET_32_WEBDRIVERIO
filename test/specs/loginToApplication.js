// var assert = require('chai').assert
// var expect = require('chai').expect
describe('loginSuite', () => {
    it('login to VTiger with valid credentials',async () => {
        await browser.url("http://localhost:8888/")
        console.log("==========================="+await browser.getUrl());
        await expect(browser).toHaveUrl("http://localhost:8888/")
        await $("//input[@name = 'user_name']").setValue("admin");
        await $("//input[@name = 'user_password']").setValue("admin");
        await $("#submitButton").click()
        console.log("===============title of homePage======================"+await browser.getTitle());
        await expect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
    });
    it.only('login to VTiger with invalid credentials',async () => {
        await browser.url("http://localhost:8888/")
        console.log("==========================="+await browser.getUrl());
        await wdioExpect(browser).toHaveUrl("http://localhost:8888/")
        await $("//input[@name = 'user_name']").setValue("admin");
        await $("//input[@name = 'user_password']").setValue("1234");
        await $("#submitButton").click()
        // console.log("===============title of homePage======================"+await browser.getTitle());
        // await expect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
        //div[contains(text(), 'You must specify a valid username and password.')]
        let errorElement = await $("//div[@class = 'errorMessage']")
        let erroeMsg =await errorElement.getText()
        //built-in
        // await expect(errorElement).toHaveTextContaining(erroeMsg)

        //external chai assertion assert style
        // assert.equal('You must specify a valid username and password.', erroeMsg, 'string not matching');

         //external chai assertion expect style
        await expect(erroeMsg).to.equal('You must specify a valid username and password.')
    });
});
