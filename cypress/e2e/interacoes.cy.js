/// <reference types="cypress"/>

describe('Interações', () =>{

    it('Digitar em um campo', () =>{
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('camilagomo@hotmail.com{enter}')
       
    })

    it('Clicando em um elemento', () =>{
        cy.visit('/')
            .get('.header-logo')

    //Click Normal
    //   cy.get('.fa-user')
    //       .click()

    //Click Duplo 
    //   cy.get('.fa-user')
    //       .dbclick()

    //Click Botão direito
    //   cy.get('.fa-user')
    //      .rightclick()

    //Click por coordenadas x/y
    //   cy.get('.fa-user')
    //      .click(100,100, {force: true})

    //simular enter
    cy.get('.form-control')
        .type('camilagomo@hotmail.com{enter}')

    it('Select', () =>{
        cy.visit('/')
            .get('.header-logo')
    
        cy.get('.footer_one_widget')    
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')    
        })

    it.only('CheckBox e Radio Button', () => {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#css')
            .check()
        })

    })
})