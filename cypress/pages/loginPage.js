class LoginPage {
    selectorsList() {
        const selectorsHome ={
            loginButton:"[data-cy='loginButton']",
            logoutButton:"[data-cy='logoutButton']",
            signInButton:"[data-cy='signInButton']",
            loginModal: '.modal-container',
            emailField:"[data-cy='email']",
            passwordField:"[data-cy='password']",
            wrongCredentials: ".text-red-500"
        }
        
        return selectorsHome
    }

    accessHomePage() {
        cy.visit('http://localhost:3000/heroes').wait(400)
    }

    checkHomePage() {
        cy.location('pathname').should('equal', '/heroes')
    }

    clickLoginButton() {
        cy.get(this.selectorsList().loginButton).contains('Login').click()
        cy.get(this.selectorsList().loginModal).should('contain', 'Login').and('be.visible')
    }

    fillEmail(email) {
        cy.get(this.selectorsList().emailField).type(email, { delay: 50 })
    }

    fillPassword(password) {
        cy.get(this.selectorsList().passwordField).type(password, { delay: 50 })
    }

    clickSignIn() {
        cy.get(this.selectorsList().signInButton).contains('Sign in').click().wait(1500)
    }

    clickLogoutButton() {
        cy.get(this.selectorsList().logoutButton).click()
    }

    wrongCredentials() {
        cy.get(this.selectorsList().wrongCredentials).should('be.visible')
    }
}

export default LoginPage