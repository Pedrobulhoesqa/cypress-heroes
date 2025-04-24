import HomePage from '../pages/homePage.js'
//import userData from '../../fixtures/userData.json'

const homePage = new HomePage()

describe('Registro de usuário com sucesso', () => {
  it('Criar o usuário corretamente', () => {    
    homePage.accessHomePage()
    homePage.checkHomePage()
    //homePage.fillNameField(userData.userOne.firstName, userData.userOne.lastName)
    //homePage.fillUsernameField(userData.userOne.username)
    //homePage.fillPasswordField(userData.userOne.password)
    //homePage.fillConfirmPasswordField(userData.userOne.password)
    //homePage.clickSubmitSignup()
    //homePage.checkSigninPage()
  })
})