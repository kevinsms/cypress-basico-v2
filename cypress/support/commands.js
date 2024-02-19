Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Kevin')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('kevin.mss@hotmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()
})