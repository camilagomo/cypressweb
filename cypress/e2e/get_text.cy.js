describe('Get Texts', () =>{

    it('Obter Texto de um Elemento', () =>{
        cy.visit('/')
            .get('.header-logo')
        
        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())
                element.hide()

            })

    })
})