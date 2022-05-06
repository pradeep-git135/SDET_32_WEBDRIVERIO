const { assert } = require("chai");

describe('suite', () => {
    it('hanleFrame',async () => {
        await browser.url('https://chercher.tech/practice/frames')
        let text = await $('//label//span').getText()
        await assert.equal(text, 'Not a Friendly Topic', 'text not matching')
        let frame1 = await $('#frame1')
        await browser.switchToFrame(frame1)
        await $('//b[@id="topic"]/../input').setValue('webdriverIo')
        let value = await $('//b[@id="topic"]/../input').getValue()
        await assert.equal(value, 'webdriverIo', 'values not matching')
        let frame3 = await $('#frame3')
        await browser.switchToFrame(frame3)
        await $('#a').click()
        await browser.switchToFrame(null)
        let frame2 = await $('#frame2')
        await browser.switchToFrame(frame2)
        await $('#animals').selectByVisibleText('Avatar')
        await browser.pause(3000)
    });
});