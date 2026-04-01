import LoginPage from '../pages/loginPage.js'
import LobbyPage from '../pages/lobbyPage.js'
import numbersData from '../fixtures/numbersData.json'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const lobbyPage = new LobbyPage()

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
  it('Like Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.normalUser.email)
    loginPage.fillPassword(userData.normalUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickLikeButtonHeroSuccess(numbersData.places.first)
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
  })

  it('Money Button Decline', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.normalUser.email)
    loginPage.fillPassword(userData.normalUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickMoneyButtonHero(numbersData.places.first)
    lobbyPage.clickNoButton(numbersData.places.first)
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
    lobbyPage.clickLikeButtonHeroSuccess(numbersData.places.first)
  })
  
  it('Money Button Confirm', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickMoneyButtonHero(numbersData.places.first)
    lobbyPage.clickYesHireButton(numbersData.places.first)
  })

  it('Money Button Decline', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickMoneyButtonHero(numbersData.places.first)
    lobbyPage.clickNoButton(numbersData.places.first)
  })
  
  it('Trash Button Confirm', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickTrashButton(numbersData.places.first)
    lobbyPage.clickYesTrashButton()
  })

  it('Trash Button Decline', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickTrashButton(numbersData.places.first)
    lobbyPage.clickNoTrashButton()
  })
  
  it('Pencil Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickEditButton(numbersData.places.first)
  })
  
  it('Create Hero Button', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickCreateHeroButton()
  })
})