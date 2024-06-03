import { test } from "@playwright/test";
import { LoginPage } from '../Pages/Home'

test('Login Fail with incorrect user name + password', async ({ page }) => {

    const Login = new LoginPage(page)

    //Navigate to page
    await Login.gotoHomepage()
    // await page.pause()
    //Login with incorrect user nam + password
    await Login.Signin('abcd@getMaxListeners.com', '123456')
   


await browser.close();
})