const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    get username_bt () { return $('//button[@id="cloudHeader-userName-grn"]')}
    get log_out_bt () { return $('//*[@id="com-header-logout-link"]')}

    async clickUsernameBt () {
        await this.username_bt.click()
    }

    async clickLogoutBt () {
        await this.log_out_bt.click()
    }
}

module.exports = new SecurePage();
