import LoginPage from '../pages/loginPage.js'
import numbersData from '../fixtures/numbersData.json'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()

describe('Login Test', () => {
  it('Login with normal user', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.normalUser.email)
    loginPage.fillPassword(userData.normalUser.password)
    loginPage.clickSignIn()
    loginPage.clickLogoutButton()
  })

  it('Login with admin user', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    loginPage.clickLogoutButton()
  })
})

describe('Wrong Credentials', () => {  
  it('Correct email and Wrong password', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.wrongUser.email)
    loginPage.fillPassword(userData.wrongUser.password)
    loginPage.clickSignIn()
    loginPage.wrongCredentials()
  })

  it('Wrong email and Correct password', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.wrongUser.email)
    loginPage.fillPassword(userData.wrongUser.password)
    loginPage.clickSignIn()
    loginPage.wrongCredentials()
  })

  it('Wrong email and password', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.wrongUser.email)
    loginPage.fillPassword(userData.wrongUser.password)
    loginPage.clickSignIn()
    loginPage.wrongCredentials()
  })

  it('No email and password', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.clickSignIn()
    loginPage.wrongCredentials()
  })
})

