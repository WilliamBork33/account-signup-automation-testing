import { Page } from './page';

class CreatePage extends Page {

    // Get Elements from Create Account Page
    get firstName()     { return browser.element('#register-firstname-registerpage2'); }
    get lastName()      { return browser.element('#register-lastname-registerpage2'); }
    get email()         { return browser.element('#register-email-registerpage2'); }
    get password ()     { return browser.element('#register-password-registerpage2'); }
    get retypePassword(){ return browser.element('#register-password-registerpage3'); }
    get agreeTOS()      { return browser.element('#register_form > div.account.checkbox-block.register > div.register-check.checkbox.checkboxOff'); }
    get createAccount() { return browser.element('#div.big-red-button.height-48.register-button.right.active > i'); }

    // Method to Open & Maximize Screen
    open(maximized = false) {
        super.open('register');
        //if(maximized) super.maximize();
    }
/* 
    submit() {
        this.createAccount.click();
    } */
}

export default new CreatePage();
