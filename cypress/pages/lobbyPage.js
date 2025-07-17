class LobbyPage {
    selectorsList() {
        const selectorsHome ={
            likeButton:"[data-cy='like']",
            moneyButton:"[data-cy='money']",
            modalAlert: "[data-cy='okAlertButton']",
            modalHire: "[data-cy= 'modalHire']",
            okAlertButton: "[data-cy='okAlertButton']",
            heroCard: "[data-cy='hero-card']",
            fans: '[data-cy="fans"]',
            saves: '[data-cy="saves"]',
            yesModalButton: '[data-cy="yesButton"]',
            noModalButton: '[data-cy="noButton"]'
        }
        
        return selectorsHome

    } 

    checkHeroCard(first, second, third){
        cy.get(this.selectorsList().heroCard).eq(first, second, third).should('be.visible')
    }

    clickLikeButtonHero(first, second, third){
        cy.get(this.selectorsList().heroCard).eq(first, second, third)
          .find(this.selectorsList().likeButton).click()
    }

    clickLikeButtonHeroSuccess(first, second, third){
        const { fans, likeButton } = this.selectorsList();

    cy.get(fans)
      .eq(first, second, third)
      .invoke('text')
      .then((valueBefore) => {
        const fansBefore = parseInt(valueBefore.replace(/\D/g, ''), 10);

        cy.get(likeButton).eq(first, second, third).click();

        cy.get(fans).eq(first, second, third).should(($el) => {
          const fansAfter = parseInt($el.text().replace(/\D/g, ''), 10);
          expect(fansAfter).to.eq(fansBefore + 1);
      });
    });
    }

    clickMoneyButtonHero(first, second, third){
        cy.get(this.selectorsList().heroCard).eq(first, second, third)
          .find(this.selectorsList().moneyButton).click()
    }

    clickOkAlertButton() {
        cy.get(this.selectorsList().modalAlert).should('be.visible').wait(1000)
        cy.get(this.selectorsList().okAlertButton).click()
    }
    
    clickYesHireButton(first, second, third) {
    const { modalHire, saves, yesModalButton } = this.selectorsList();

    cy.get(modalHire).should('be.visible');
    cy.get(saves)
      .eq(first, second, third)
      .invoke('text')
      .then((valueBefore) => {
        const savesBefore = parseInt(valueBefore.replace(/\D/g, ''), 10);

        cy.get(yesModalButton).click();

        cy.get(saves).eq(first, second, third).should(($el) => {
          const savesAfter = parseInt($el.text().replace(/\D/g, ''), 10);
          expect(savesAfter).to.eq(savesBefore + 1);
      });
    });
  }

    clickNoButton() {
        cy.get(this.selectorsList().modalHire).should('be.visible').wait(1000)
        cy.get(this.selectorsList().noModalButton).click()
    }

    //checkFansUpdate() {
      //  cy.get(this.selectorsList().fans).should('be.visible').wait(1000)
    //}
}

export default LobbyPage