const HelloPage = require('../pages/hello.page');


describe('My hello page', () => {
    it('My hello world page', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('some text')
        await expect(HelloPage.header).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.header).not.toBeExisting()
    });
});


