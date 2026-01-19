class LobbyPage {
  selectorsList() {
    const selectorsHome ={
      likeButton:"[data-cy='like']",
      moneyButton:"[data-cy='money']",
      modalAlert: '[data-cy="modalAlert"]',
      modalHire: "[data-cy= 'modalHire']",
      okAlertButton: "[data-cy='okAlertButton']",
      heroCard: "[data-cy='hero-card']",
      fans: '[data-cy="fans"]',
      saves: '[data-cy="saves"]',
      yesModalButton: '[data-cy="yesButton"]',
      noModalButton: '[data-cy="noButton"]',
      trashButton: '[data-cy="trash"]',
      modalDelete: '.modal-container > .open',
      deleteButtons: '.justify-end',
      editButton: '[data-cy="pencil"]',
      createButton: "[href='/heroes/new']"
    }
        
  return selectorsHome
  } 

  listHeroCards(){
    cy.get(this.selectorsList().heroCard).its('length')
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
      .find(this.selectorsList().moneyButton).click().wait(1000)
  }
    
  clickMoneyButtonHeroSuccess(first, second, third){
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

  clickNoButton(first, second, third) {
    const { modalHire, saves, noModalButton } = this.selectorsList();

    cy.get(modalHire).should('be.visible');
    cy.get(saves)
      .eq(first, second, third)
      .invoke('text')
      .then((valueBefore) => {
        const savesBefore = parseInt(valueBefore.replace(/\D/g, ''), 10);

        cy.get(noModalButton).click();

        cy.get(saves).eq(first, second, third).should(($el) => {
          const savesAfter = parseInt($el.text().replace(/\D/g, ''), 10);
          expect(savesAfter).to.eq(savesBefore);
        });
    });
  }    
  
  clickTrashButton(first, second, third) {
    cy.get(this.selectorsList().heroCard).eq(first, second, third)
      .find(this.selectorsList().trashButton).click().wait(1000)
    cy.get(this.selectorsList().modalDelete).should('be.visible')
  }

  clickYesTrashButton() {
    const {deleteButtons } = this.selectorsList();
    cy.get(deleteButtons).find('button').eq(0).click().wait(1500);
  }

  clickNoTrashButton() {
  const {deleteButtons } = this.selectorsList();
    cy.get(deleteButtons).find('button').eq(1).click().wait(1500);
  }

  clickEditButton(first, second, third, one, two, three){
    cy.get(this.selectorsList().heroCard).eq(first, second, third, one, two, three)
      .find(this.selectorsList().editButton).click().wait(1500)
      .location('pathname').should('match', /edit/)
    }

  clickCreateHeroButton() {
    cy.get(this.selectorsList().createButton).should('be.visible').click().wait(800)
      .location('pathname').should('equal', '/heroes/new')
  }

    checkDeletedHeroCard(one, two, three){
    cy.get(this.selectorsList().heroCard).eq(one, two, three).should('not.exist')
  }
}

export default LobbyPage