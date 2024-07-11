describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        //visit (url) to visit the url
        cy.contains('Welcome')
    })
})