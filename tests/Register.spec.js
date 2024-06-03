import { test } from "@playwright/test";
import { LoginPage } from '../Pages/Home'
import { RegisterPage } from '../Pages/Register'




test('Login passed with correct with valid user name + password', async({page})=>{

    const SignUp = new RegisterPage (page)

    //Naviaget to page
    await SignUp.gotoHomepage()
    // await page.pause()
  
    //Login with correct user name + password 
    await SignUp.SignUp('Le','QA','leQA@gmail.com', 'abc@123456')






// ---------------------


})