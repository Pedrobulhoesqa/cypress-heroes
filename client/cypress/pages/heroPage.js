class HeroPage {
    selectorsList() {
        const selectorsHero ={
            createHero:"[href='/heroes/new']",
            nameField:"[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powersSelector: "[data-cy='powersSelect']",
            avatarField:  "[data-cy='avatarFile']",
            pageButtons: "button",
            alertNotification: ".text-red-500",
        }
        
        return selectorsHero

    }

    clearFields() {
        cy.get(this.selectorsList().nameField).clear()
          .get(this.selectorsList().priceField).clear()
          .get(this.selectorsList().fansField).clear()
          .get(this.selectorsList().savesField).clear()
    }
    createHeroButton() {
        cy.get(this.selectorsList().createHero).click(), { delay: 50 }
        cy.location('pathname').should('equal', '/heroes/new')
    }

    fillNameField(one, two, three) {
        cy.get(this.selectorsList().nameField).clear().type(one, two, three, { delay: 50 })
    }

    fillPriceField() {
       cy.get(this.selectorsList().priceField).clear().type("10", { delay: 50 }) 
    }

    fillFansField() {
        cy.get(this.selectorsList().fansField).clear().type("9", { delay: 50 }) 
    }

    fillSavesField() {
        cy.get(this.selectorsList().savesField).clear().type("8", { delay: 50 }) 
    }

    selectPowers() {
        cy.get(this.selectorsList().powersSelector).select(['1', '3', '6', '9']);
    }

    selectAvatar() {
        cy.get(this.selectorsList().avatarField).selectFile('./cypress/fixtures/avatar.png');
    }  
    
    submitHero() {
        cy.get(this.selectorsList().pageButtons).contains("Submit").click()
    }
    
    deleteHero() {
        cy.get(this.selectorsList().pageButtons).contains("Delete Hero").click()
    }
    checkAlert(name, price, fans, saves, powers){
        cy.get(this.selectorsList().alertNotification).should('contain', name, price, fans, saves, powers)
    }
}

export default HeroPage