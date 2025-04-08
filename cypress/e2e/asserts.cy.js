/// <reference types="cypress"/>

describe('Asserts', () =>{

    it('Verificar elemento visível', () =>{
    cy.visit('/')
        .get('.header-logo')

    //Click no login
    cy.get('.fa-user')
        .click()

    // Validar elemento       
    cy.get('.account_form > h3')
       .should('be.visible')

    cy.get('.account_form > h3')
        .should('contain', 'Login')
        .should('have.text', 'Login')
        
    cy.get('.account_form > h3')
        .then((element) => {
            console.log(element.text())
            expect(element.text()).eq('Login')
            expect(element).to.be.visible
        })

    })

})