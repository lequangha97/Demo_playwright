import { test } from "@playwright/test";
import { LoginPage } from '../Pages/Home'
import { RegisterPage } from '../Pages/Register'




test('Register new User', async({page})=>{

    const SignUp = new RegisterPage (page)

    //Naviaget to page
    await SignUp.gotoHomepage()
    // await page.pause()
  
    //Login with correct user name + password 
    await SignUp.SignUp('New','User2','User2@gmail.com', 'abc@123456')






// ---------------------


})