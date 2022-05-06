
class Homepage {
    get leadsLink(){
        return $("//td[@class = 'tabUnSelected']//a[text() = 'Leads']")
    }
    async clickOnLeadsLink(){
        await this.leadsLink.click()
    }
    get contactsLink(){
        return $("//td[@class = 'tabUnSelected']//a[text() = 'Contacts']")
    }
    async clickOncontatsLink(){
        await this.contactsLink.click()
    }
   
    get organizationLink(){
        return $("//td[@class = 'tabUnSelected']//a[text() = 'Organizations']")
    }
    async clickOnOrganizationLink(){
        await this.organizationLink.click()
    }
    get adminImage(){
        return $("//img[@src='themes/softed/images/user.PNG']")
    }
    get signoutLink(){
        return $("//a[text() = 'Sign Out']")
    }

    async logout(){
        await this.adminImage.moveTo()
        await this.signoutLink.waitForDisplayed()
        await this.signoutLink.click()
    }
}
module.exports = new Homepage()