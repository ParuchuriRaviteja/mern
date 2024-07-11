describe('Home Page test',()=>{
    it('Check The Input Field',()=>{
        cy.visit('/');
        cy.get('input').type('mani')
        cy.get('button').should('be.visible')
        cy.get('button').click();
        cy.contains('Welcome,mani')
        cy.get('input').should('have.value','mani')
    })
})