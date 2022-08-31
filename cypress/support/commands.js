// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("checkSizes", (size) => {
    cy.get(size).click({force:true})
    cy.get('.Products__Container-sc-uhudcz-0').should('have.length.above', 0)
})

Cypress.Commands.add("addToCartFirstItem", (itemName, price) => {
    cy.get('.Products__Container-sc-uhudcz-0').children().eq(0).find('button').click()
    cy.get('.CartProducts__Container-sc-7th5t8-0').should('be.visible')
    cy.get('.CartProducts__Container-sc-7th5t8-0').children().eq(0).children().eq(2).children().eq(0).should('have.text',itemName)
    cy.get('.CartProducts__Container-sc-7th5t8-0').children().eq(0).children().eq(3).find('p').should('have.text',price)

})

Cypress.Commands.add("checkoutProduct", () => {
    cy.get('button:contains(Checkou)').click({force:true})
    cy.on('window:alert', function(alert) {
        expect(alert).eq('Checkout - Subtotal: $ 10.90')
    })
    
})
