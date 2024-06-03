import { test } from "@playwright/test";
import { LoginPage } from '../Pages/Home'




test('Login passed with correct with valid user name + password', async({page})=>{

    const Login = new LoginPage(page)

    //Naviaget to page
    await Login.gotoHomepage()

    //Login with correct user name + password 
    await Login.Signin('lele@gmail.com', 'abc@123456')






// ---------------------

await browser.close();
})