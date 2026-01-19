import LoginPage from '../pages/loginPage.js'
import LobbyPage from '../pages/lobbyPage.js'
import HeroPage from '../pages/heroPage.js'
import numbersData from '../fixtures/numbersData.json'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const lobbyPage = new LobbyPage()
const heroPage = new HeroPage()

describe('Edit Hero', () => {
  it('Edit Fields and Submit', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickEditButton(numbersData.places.first)
    heroPage.fillNameField(userData.herosList.three)
    heroPage.fillPriceField()
    heroPage.fillFansField()
    heroPage.fillSavesField()
    heroPage.selectPowers()
    heroPage.selectAvatar()
    heroPage.submitHero()
  })

  it('Delete Hero', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickEditButton(numbersData.places.first)
    heroPage.deleteHero()
    lobbyPage.clickYesTrashButton()
  })

  it('Alert notification Fiels required', () => {
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickEditButton(numbersData.places.first)
    heroPage.clearFields()
    heroPage.submitHero()
    heroPage.checkAlert(userData.alertNotification.name)
    heroPage.checkAlert(userData.alertNotification.price)
    heroPage.checkAlert(userData.alertNotification.fans)
    heroPage.checkAlert(userData.alertNotification.saves)
  })
})