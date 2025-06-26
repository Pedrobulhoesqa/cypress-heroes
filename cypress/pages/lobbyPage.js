class LobbyPage {
    selectorsList() {
        const selectorsHome ={
            likeButton:"[data-cy='like']",
            moneyButton:"[data-cy='money']",
            modalAlert: "[data-cy='okAlertButton']",
            okAlertButton: "[data-cy='okAlertButton']",
            heroCard: "[data-cy='hero-card']"
        }
        
        return selectorsHome

    } 

    /*checkHomePage() {
        cy.location('pathname').should('equal', '/heroes')
    }*/

    checkHeroCard(first, second, third){
        cy.get(this.selectorsList().heroCard).eq(first, second, third).should('be.visible')
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

export default LobbyPage