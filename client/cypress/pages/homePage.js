class HomePage {
    selectorsList() {
        const selectorsHome ={
            signinUsernameField: "[data-test='signin-username']", 
            signinPasswordField: "[data-test='signin-password']"
        }
        
        return selectorsHome

    }
    accessHomePage() {
        cy.visit('/')
    }

    checkHomePage() {
        cy.location('pathname').should('equal', '/heroes').wait(400)
    }

    /*loginWithUser(username, password) {
        cy.get(this.selectorsList().signinUsernameField).type(username)
        cy.get(this.selectorsList().signinPasswordField).type(password)
    }*/
}

export default HomePage