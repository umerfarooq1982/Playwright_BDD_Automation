export class RegisterPage {
    constructor(page) {
        this.page = page;

        //await page.goto('https://parabank.parasoft.com/parabank/index.htm')
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.firstName = page.locator('[id="customer\\.firstName"]');
        this.lastName = page.locator('[id="customer\\.lastName"]');
        this.address = page.locator('[id="customer\\.address\\.street"]');
        this.city = page.locator('[id="customer\\.address\\.city"]');
        this.state = page.locator('[id="customer\\.address\\.state"]');
        this.zipCode = page.locator('[id="customer\\.address\\.zipCode"]');
        this.phoneNumber = page.locator('[id="customer\\.phoneNumber"]');
        this.ssn = page.locator('[id="customer\\.ssn"]');
        this.userName = page.locator('[id="customer\\.username"]');
        this.password = page.locator('[id="customer\\.password"]');
        this.confirmPassword = page.locator('#repeatedPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' })
    }

    async loadBrowser(url) {
        await this.page.goto(url);   
    }
    async clickOnRegisterLink(){
        await this.registerLink.click();
    }
    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
    }
    async enterLastName(lastName) {
        await this.lastName.fill(lastName);
    }
    async enterAddress(address) {
        await this.address.fill(address);
    }
    async enterCity(city) {
        await this.city.fill(city);
    }
    async enterState(state) {
        await this.state.fill(state);
    }
    async enterZip(zipCode) {
        await this.zipCode.fill(zipCode);
    }
    async enterPhone(phoneNumber) {
        await this.phoneNumber.fill(phoneNumber);
    }
    async enterSsn(ssn) {
        await this.ssn.fill(ssn);
    }
    async enteruserName(userName) {
        await this.userName.fill(userName);
    }
    async enterPassword(password) {
        await this.password.fill(password);
    }
    async enterConfirmPassword(confirmPassword) {
        await this.confirmPassword.fill(confirmPassword);
    }
    async clickRegisterButton() {
        await this.registerButton.click();
    }

}

