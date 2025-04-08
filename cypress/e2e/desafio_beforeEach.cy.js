/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
const user_data = require('../fixtures/desafio_valid_data.json')


describe('Cadastro de Usuário', () => {
    beforeEach('Acessando página de Cadastro', () => {
    //acessou app
    cy.visit('/')
      .get('.header-logo')

    //entrou no registro e se está visível          
    cy.get('.fa-lock')
      .click()

    cy.get('#user')
      .should('be.visible')
    
    })


    it('Validar campo nome vazio', () => {

    // clicou no registrar
    cy.get('#btnRegister')
        .click()

        // verificou mensagem
    cy.get('.errorLabel')
        .should('have.text', 'O campo nome deve ser prenchido')


    })

    it('Validar campo e-mail vazio', () =>{
        //Validando inserção de nome usando fixtures
        cy.get('#user')
        cy.type(faker.name.fullName)

        cy.get('#btnRegister')
          .click()

        cy.get('.errorLabel')
          .should('have.text', 'O campo e-mail deve ser prenchido corretamente')

    })

    it('Validar campo e-mail inválido', () => {
        cy.get('#user')
          .should('be.visible')
          .type('Camila Monteiro')

        //Validando email inválido
        cy.get('#email')
          .should('be.visible')
          .type('emailinvalido')

        cy.get('#btnRegister')
          .click()

        cy.get('.errorLabel')
          .should('have.text', 'O campo e-mail deve ser prenchido corretamente')

    })


    it('Validação senha incorreta', () => {
        cy.get('#user')
          .should('be.visible')
          .type('Camila Monteiro')

        cy.get('#email')
          .should('be.visible')
          .type('camilagomo@hotmail.com')
        
        cy.get('#password')
          .should('be.visible')
          .type('123')

        cy.get('#btnRegister')
          .click()

        //Validando senha
        cy.get('.errorLabel')
          .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Cadastro com sucesso - Faker JS', () => {

        const name = faker.name.fullName()
        const email = faker.internet.email

        cy.get('#user')
          .should('be.visible')
          .type(name)

        cy.get('#email')
          .should('be.visible')
          .type('camilagomo@hotmail.com')
        
        cy.get('#password')
          .should('be.visible')
          .type('123456')

        cy.get('#btnRegister')
          .click()

        //Validando mensagem de sucesso
        cy.get('#swal2-title')
          .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
          .should('have.text', `Bem-vindo ${name}`)

    })


})