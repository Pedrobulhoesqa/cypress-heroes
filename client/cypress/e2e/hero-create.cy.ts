import LoginPage from '../pages/loginPage.js'
import LobbyPage from '../pages/lobbyPage.js'
import HeroPage from '../pages/heroPage.js'
import numbersData from '../fixtures/numbersData.json'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const lobbyPage = new LobbyPage()
const heroPage = new HeroPage()

describe('Create a New Hero', () => {
    it('Submit New Hero in Lobby Page', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    heroPage.createHeroButton()
    heroPage.fillNameField(userData.herosList.one)
    heroPage.fillPriceField()
    heroPage.fillFansField()
    heroPage.fillSavesField()
    heroPage.selectPowers()
    heroPage.selectAvatar()
    heroPage.submitHero()
  })

    it('Submit New Hero in Edit Hero Page', () => {
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickEditButton(numbersData.places.first)
    heroPage.createHeroButton()
    heroPage.fillNameField(userData.herosList.two)
    heroPage.fillPriceField()
    heroPage.fillFansField()
    heroPage.fillSavesField()
    heroPage.selectPowers()
    heroPage.selectAvatar()
    heroPage.submitHero()
    })

    it('Alert notification Fiels required', () => {
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    heroPage.createHeroButton()
    heroPage.clearFields()
    heroPage.submitHero()
    heroPage.checkAlert(userData.alertNotification.name)
    heroPage.checkAlert(userData.alertNotification.price)
    heroPage.checkAlert(userData.alertNotification.fans)
    heroPage.checkAlert(userData.alertNotification.saves)
    heroPage.checkAlert(userData.alertNotification.powers)
  })
})