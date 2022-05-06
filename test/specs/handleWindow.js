const { assert } = require("chai");

describe('suite', () => {
    it('handleMultipleWindows',async () => {
        await browser.url("https://nxtgenaiacademy.com/multiplewindows/")
        let parentWindowHandle = await browser.getWindowHandle()
        await $("#button1").click()
        let allWindowHandles = await browser.getWindowHandles() //[parenwindow, childwindow]

        for (const windowhandle of allWindowHandles) {
            await browser.switchToWindow(windowhandle)
            if (!(windowhandle == parentWindowHandle)) {
                break;
            }
        }
        let childTitle = await browser.getTitle()
        assert.equal(childTitle, 'NxtGen A.I Academy – Learn With Clarity', 'titles are not matching');

    });

    it.only('handleMultipleWindows',async () => {
        await browser.url("https://nxtgenaiacademy.com/multiplewindows/")
        let parentWindowHandle = await browser.getWindowHandle()
        let parenttile = await browser.getTitle()
        await $("#button1").click()
        let allWindowHandles = await browser.getWindowHandles() //[parenwindow, childwindow]

        for (const windowhandle of allWindowHandles) {
            // await browser.switchToWindow(windowhandle)
            if (!(windowhandle == parentWindowHandle)) {
                await browser.switchToWindow(windowhandle)
                break;
            }
        }
        let childTitle = await browser.getTitle()
        assert.equal(childTitle, 'NxtGen A.I Academy – Learn With Clarity', 'titles are not matching');
        await browser.switchWindow('Demo Site – Multiple Windows – NxtGen A.I Academy')
        assert.equal(parenttile, 'Demo Site – Multiple Windows – NxtGen A.I Academy');



    });
    
});