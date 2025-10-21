import LoginPage from '../pages/loginPage.js'
import LobbyPage from '../pages/lobbyPage.js'
import HeroPage from '../pages/heroPage.js'
import numbersData from '../fixtures/numbersData.json'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const lobbyPage = new LobbyPage()
const heroPage = new HeroPage()

describe('Edit Hero', () => {
  it.only('Fields functions', () => {    
    loginPage.accessHomePage()
    loginPage.checkHomePage()
    loginPage.clickLoginButton()
    loginPage.fillEmail(userData.adminUser.email)
    loginPage.fillPassword(userData.adminUser.password)
    loginPage.clickSignIn()
    lobbyPage.clickEditButton(numbersData.places.first)
    heroPage.fillNameField()
    heroPage.fillPriceField()
    heroPage.fillFansField()
    heroPage.fillSavesField()
    heroPage.selectPowers()
    heroPage.selectAvatar()
  })
})