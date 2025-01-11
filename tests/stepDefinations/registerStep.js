import { createBdd } from "playwright-bdd";

import { test } from '../fixture/fixture';


const {Given , When , Then }  = createBdd(test);

// 1. Missing step definition for "tests\features\Register.feature:8:5"
Given('User is on the Parabank registration page', async ({registerPage}) => {
  await registerPage.loadBrowser(process.env.URL);        //('https://parabank.parasoft.com/parabank/index.htm');
});

// 2. Missing step definition for "tests\features\Register.feature:9:5"
Given('the user has a valid {string} to register', async ({registerPage}, arg) => {
  await registerPage.clickOnRegisterLink();
});

// 3. Missing step definition for "tests\features\Register.feature:10:5"
When('the user fill in the registration form and enters {string} and {string}', async ({registerPage}, arg, arg1) => {
  await registerPage.enterFirstName(process.env.FIRSTNAME);           //('John');
  await registerPage.enterLastName(process.env.LASTNAME);             //('Doe'); 
});

// 4. Missing step definition for "tests\features\Register.feature:11:5"
When('the user fill in the {string} having {string}, state {string} and zipcode {string}', async ({registerPage}, arg, arg1, arg2, arg3) => {
  await registerPage.enterAddress (process.env.ADDRESS);          //('123 Elm St');
  await registerPage.enterCity(process.env.CITY);              //('Metropolis');
  await registerPage.enterState(process.env.STATE);               //('NY');
  await registerPage.enterZip(process.env.ZIP)                    //('1001');
});

// 5. Missing step definition for "tests\features\Register.feature:12:5"
When('the user fill in the {string} and {string}', async ({registerPage}, arg, arg1) => {
  await registerPage.enterPhone(process.env.PHONE)               //('1234567890');
  await registerPage.enterSsn (process.env.SSN)                   //('987654321');
});

// 6. Missing step definition for "tests\features\Register.feature:13:5"
When('the user fill in the {string} , "password and {string}', async ({registerPage}, arg, arg1) => {
  await registerPage.enteruserName(process.env.USERNAMEONE)               //('johndoe');
  await registerPage.enterPassword(process.env.PASSWORDONE)               //('Password123');
  await registerPage.enterConfirmPassword(process.env.CONFIRMPASSWORD)    //('Password123');
});

// 7. Missing step definition for "tests\features\Register.feature:14:5"
When('the user clicks on the {string}', async ({registerPage}, arg) => {
  await registerPage.clickRegisterButton();
});

// 8. Missing step definition for "tests\features\Register.feature:15:5"
Then('the user should be able to register successfully into the application', async ({}) => {
  // ...
});


