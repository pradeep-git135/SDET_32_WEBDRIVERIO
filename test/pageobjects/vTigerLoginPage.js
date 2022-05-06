
class LoginPage {

    get usernameTxtField(){
        return $("//input[@name = 'user_name']")
    }
    async enterUserName(username){
        await this.usernameTxtField.setValue(username)
    }
    get passwordeTxtField(){
        return $("//input[@name = 'user_password']")
    }
    async enterPassword(password){
        await this.passwordeTxtField.setValue(password)
    }
    get submitbutton(){
        return $("#submitButton")
    }
    async clickOnSubmitbutton(){
        await this.submitbutton.click()
    }

    async loginToApplication(url, userName, password){
        await browser.url(url)
        await this.enterUserName(userName)
        await this.enterPassword(password)
        await this.clickOnSubmitbutton()
    }
}
module.exports = new LoginPage()