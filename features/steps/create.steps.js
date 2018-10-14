import createPage from '../page_objects/create.page';

module.exports =  function() {

    this.Given(/^a client is on the register page$/, function () {
        // Steps to Open Register Page
        createPage.open(true);
        createPage.email.waitForVisible();
      });


      this.When(/^the client info is submitted$/, function () {
        // Steps to Input New Account Info
        createPage.firstName.setValue('First');
        createPage.lastName.setValue('Last');
        createPage.email.setValue('Email@email.com');
        createPage.password.setValue('Password');
        createPage.retypePassword.setValue('Password');
        createPage.agreeTOS.click();
        //createAccount.click();
      });


      this.Then(/^the account is created$/, function () {
        // Steps to Screenshot Newly Created Account
        browser.saveScreenshot('screenshots/./snapshot.png');
      });

}
