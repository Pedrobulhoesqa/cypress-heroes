import HomePage from '../pages/homePage.js'
import userData from '../fixtures/userData.json'

const homePage = new HomePage()

describe('Login Test', () => {
  it('Login with normal user', () => {    
    homePage.accessHomePage()
    homePage.checkHomePage()
    homePage.clickLoginButton()
    homePage.fillEmail(userData.normalUser.email)
    homePage.fillPassword(userData.normalUser.password)
    homePage.clickSignIn()
    homePage.clickLogoutButton()
    //homePage.fillNameField(userData.userOne.firstName, userData.userOne.lastName)
  })

  it('Login with admin user', () => {    
    homePage.accessHomePage()
    homePage.checkHomePage()
    homePage.clickLoginButton()
    homePage.fillEmail(userData.adminUser.email)
    homePage.fillPassword(userData.adminUser.password)
    homePage.clickSignIn()
    //homePage.clickLogoutButton()
    //homePage.fillNameField(userData.userOne.firstName, userData.userOne.lastName)
  })
})

