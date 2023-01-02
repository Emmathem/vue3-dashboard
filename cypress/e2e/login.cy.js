describe('Navigate to Login', () => {
    it('It should allow login', () => {
        cy.visit('/');
        expect(cy.get('h3').contains('Login Here')).to.exist;
    });
})