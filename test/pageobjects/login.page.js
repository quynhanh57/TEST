

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    get username () { return $('[name = "username"]') }
    get password () { return $('[name = "password"]') }
    get loginBt () { return $('[type = "submit"]') }
    
    async open () {
        await super.open('/login')
    }

    async clickLoginBt () {
        await this.loginBt.click()
    }

}

module.exports = new LoginPage();
