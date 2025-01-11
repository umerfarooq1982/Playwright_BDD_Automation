import { createBdd } from "playwright-bdd";

import { test } from '../fixture/fixture';


const {Given , When , Then }  = createBdd(test);




// 1. Missing step definition for "tests\features\Login.feature:6:2"
Given('the user is onto the login page', async ({loginPage}) => {
  loginPage.loadBrowser(process.env.URL)
  });
  
  // 2. Missing step definition for "tests\features\Login.feature:7:2"
  When('the user enter valid userName {string} and passowrd {string}', async ({loginPage}, username, password) => {
  await loginPage.enteruserName(process.env.USERNAME)
  await loginPage.enterpassword(process.env.PASSWORD)
  });
  
  // 3. Missing step definition for "tests\features\Login.feature:8:2"
  When('the user click on login button', async ({loginPage}) => {
    await loginPage.clickloginbutton()
  });
  
  // 4. Missing step definition for "tests\features\Login.feature:9:2"
  Then('user should be login successfully into application', async ({loginPage}) => {
    // ...
  });
  



 