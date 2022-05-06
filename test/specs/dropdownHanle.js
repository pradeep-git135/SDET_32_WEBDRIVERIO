describe('suite', () => {
    it('handleDropdown by attribute', async () => {
        await browser.url('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
        await $('//select').selectByAttribute('value', 'IND');
        await browser.pause(3000)
    });
    it.only('get all the elements from dropdown',async () => {
        await browser.url('https://www.globalsqa.com/demo-site/select-dropdown-menu/')

        let countries = await $$('//select//option')
        for (const country of countries) {
            let textCountry = await country.getText()
            console.log('================================'+textCountry);
        }
        
    });

});