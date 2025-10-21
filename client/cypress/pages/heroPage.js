class HeroPage {
    selectorsList() {
        const selectorsHero ={
            nameField:"[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powersSelector: "[data-cy='powersSelect']",
            avatarField:  "[data-cy='avatarFile']",
            pageButtons: "button",
            alertCreatNotification: ".text-red-500",
        }
        
        return selectorsHero

    }
    fillNameField() {
        cy.get(this.selectorsList().nameField).clear().type("Super Test", { delay: 50 })
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
        cy.get(this.selectorsList().avatarField).click()
    }  
    
    submitHero() {
        cy.get(this.selectorsList().pageButtons).contains("Submit").click()
    }
    
    deleteHero() {
        cy.get(this.selectorsList().pageButtons).contains("Delete Hero").click()
    }
}

export default HeroPage