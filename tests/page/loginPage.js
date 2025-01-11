export class LoginPage {
     constructor(page) {
        this.page = page;
        this.userName = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page. getByRole('button', { name: 'Log In' });

    }

    async loadBrowser(url) {
        //await this.page.goto(url);
        await this.page.goto(url);
        
    }

    async enteruserName(Username) {
        await this.userName.fill(Username);
    }

    async enterpassword(Password) {
        await this.password.fill(Password);
    }

    async clickloginbutton() {
        await this.loginButton.click();
    }

}

