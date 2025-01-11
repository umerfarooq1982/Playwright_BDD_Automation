
import {test as setup} from '@playwright/test';
//import {path} from 'path';

const authfile = 'playwright/.auth/user.json'; 
setup('authenticate',async({page})=>{
    await page.goto(process.env.URL);
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill(process.env.USERNAME);
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: 'Log In' }).click();
   
    await page.context().storageState({path:authfile});
  }
   
)
