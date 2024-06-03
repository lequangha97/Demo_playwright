 
 exports.RegisterPage = class RegisterPage {

    constructor(page) {
      this.page = page
      this.SignUpLink = page.getByRole('link', { name: 'Create an Account' })
      this.FirstName_box = page.getByLabel('First Name')
      this.LastName_box = page.getByLabel('Last Name')
      this.Emai_box = page.getByLabel('Email', { exact: true })
      this.NewPassword = page.getByRole('textbox', { name: 'Password*', exact: true })
      this.ConfirmPass = page.getByLabel('Confirm Password')
      this.Create_btn = page.getByRole('button', { name: 'Create an Account' })
      this.SuccessMes = page.getByText('Thank you for registering with Main Website Store.')
  
  
    }
    async gotoHomepage (){
      await this.page.goto('https://magento.softwaretestingboard.com/');
    }
  
    async SignUp(FirstName,LastName,Email, NewPassword) {
  
      await this.SignUpLink.click();
      await this.FirstName_box.click()
      await this.FirstName_box.fill(FirstName)
      await this.LastName_box.fill(LastName)
      await this.Emai_box.fill(Email)
      await this.NewPassword.fill(NewPassword)
      await this.ConfirmPass.fill(NewPassword)
      await this.Create_btn.click()
      await this.SuccessMes.isVisible()

    }
  }