class CreatePage {
    selectorsList() {
        const selectorsHome ={
            loginButton:"[data-cy='loginButton']",
            logoutButton:"[data-cy='logoutButton']",
            signInButton:"[data-cy='signInButton']",
            loginModal: '.modal-container',
            emailField:"[data-cy='email']",
            passwordField:"[data-cy='password']",
            likeButton:"[data-cy='like']",
            moneyButton:"[data-cy='money']",
            modalAlert: "[data-cy='okAlertButton']",
            okAlertButton: "[data-cy='okAlertButton']",
            heroCard: "[data-cy='hero-card']"
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
        cy.get(this.selectorsList().signInButton).contains('Sign in').click().wait(1000)
    }

    clickLogoutButton() {
        cy.get(this.selectorsList().logoutButton).click()
    }

    checkHeroCard(first, second, third){
        cy.get(this.selectorsList().heroCard).eq(first, second, third).click()
    }

    clickLikeButtonHero(first, second, third){
        cy.get(this.selectorsList().heroCard).eq(first, second, third)
          .find(this.selectorsList().likeButton).click()
    }

    clickMoneyButtonHero(first, second, third){
        cy.get(this.selectorsList().heroCard).eq(first, second, third)
          .find(this.selectorsList().moneyButton).click()
    }

    clickOkAlertButton() {
        cy.get(this.selectorsList().modalAlert).should('be.visible').wait(1000)
        cy.get(this.selectorsList().okAlertButton).click()
    }
  
}

export default CreatePage