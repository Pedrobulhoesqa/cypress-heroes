import LoginPage from '../pages/loginPage.js'
import LobbyPage from '../pages/lobbyPage.js'
//import editPage from '../pages/editPage.js'
//import createPage from '../pages/createPage.js'
import numbersData from '../fixtures/numbersData.json'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const lobbyPage = new LobbyPage()
//const editPage = new EditPage()
//const createPage = new CreatePage()

describe('Logout User Interactions', () => {
  it('Like and Money Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    lobbyPage.clickLikeButtonHero(numbersData.places.first)
    lobbyPage.clickOkAlertButton()
    lobbyPage.clickMoneyButtonHero(numbersData.places.second)
    lobbyPage.clickOkAlertButton()
  })
})

describe('Normal User Interactions', () => {
  it.only('Like Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.normalUser.email)
    loginPage.fillPassword(userData.normalUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickLikeButtonHeroSuccess(numbersData.places.first)
    //comprar mudança de numero
  })

  it('Money Button Confirm', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.normalUser.email)
    loginPage.fillPassword(userData.normalUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickMoneyButtonHero(numbersData.places.first)
    lobbyPage.clickYesHireButton(numbersData.places.first)
    //comparar mudança de número
  })

  it('Money Button Decline', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.normalUser.email)
    loginPage.fillPassword(userData.normalUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickMoneyButtonHero(numbersData.places.first)
    lobbyPage.clickNoButton()
    //comparar mudança de número
  })
})

describe('Admin User Interactions', () => {
  it('Like Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
  })
  
  it('Money Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
  })
  
  it('Trash Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
  })
  
  it('Pencil Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
  })
})