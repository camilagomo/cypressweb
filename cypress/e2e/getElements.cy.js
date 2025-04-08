describe('Get Elements', () =>{
    it('Obter Elementos', () =>{
        //http://www.automationpratice.com.br
        //get - selecionar elementos
        cy.visit('/')
            .get('.header-logo')
        
        //contains() - encontra elementos por texto
        cy.get('#top_header').as('cabecalho')
            .contains('Login')

        //find () Pesquisa elementos com menos escopo usando GET
        cy.get('#top_header')
            .find('.fa-user')

        //as() - alias - Apelido
        cy.get('@cabecalho')
            .find('.fa-user')


    })
})