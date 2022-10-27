/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     constructor() {
        this.timeOutMsg = {
            timeout: 10000,
            timeoutMsg: ''
        }
    }

    async waitUntilElementDisplayed(locator) {
        await browser.waitUntil( async () => (await locator.isDisplayed() === true), this.timeOutMsg );
    }

    open (path) {
        return browser.url(`https://internship-qa-3.cybozu-dev.com/login?redirect=https%3A%2F%2Finternship-qa-3.cybozu-dev.com%2F/${path}`)
    }


}
