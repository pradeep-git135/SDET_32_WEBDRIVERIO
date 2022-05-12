const allureReporter = require('@wdio/allure-reporter').default
describe('testSuite02', () => {
    it('tc02', () => {
        allureReporter.addFeature('organization')
        console.log("executing tc_02");
    });
});