class HomePage {
    selectorsList() {
        const selectorsHome ={
            genericButton:'button',
            loginModal: '.modal-container',
            emailField:"[data-cy='email']",
            passwordField:"[data-cy='password']",
        }
        
        return selectorsHome

    }
    accessHomePage() {
        cy.visit('/').wait(400)
    }

    checkHomePage() {
        cy.location('pathname').should('equal', '/heroes')
    }

    clickLoginButton() {
        cy.get(this.selectorsList().genericButton).contains('Login').click()
        cy.get(this.selectorsList().loginModal).should('contain', 'Login').and('be.visible')
    }

    fillEmail(email) {
        cy.get(this.selectorsList().emailField).type(email, { delay: 50 })
    }

    fillPassword(password) {
        cy.get(this.selectorsList().passwordField).type(password, { delay: 50 })
    }

    clickSignIn() {
        cy.get(this.selectorsList().genericButton).contains('Sign in').click().wait(1000)
    }

    clickLogoutButton() {
        cy.get(this.selectorsList().genericButton).contains('Logout').click()
    }
}

export default HomePage