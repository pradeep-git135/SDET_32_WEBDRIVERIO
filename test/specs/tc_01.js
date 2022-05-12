// const { assert } = require("chai");
const allureReporter = require('@wdio/allure-reporter').default
describe('testSuite01', () => {
    it('tc01', () => {
        allureReporter.addFeature('contact')
        console.log("executing tc_01");
        assert.fail("intentional fail")
    });
});