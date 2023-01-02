describe('Navigate to Login', () => {
    it('It should allow login', () => {
        cy.visit('/');

        //get the title of the card
        expect(cy.get('h3').contains('Login Here')).to.exist;
        expect(cy.get('label').contains('Email Address')).to.exist;
        expect(cy.get('label').contains('Password')).to.exist;

        expect(cy.get('input[name="email"]')).not.null;

        cy.get('input[name="email"]').type('devtemiope@gmail.com');
        cy.get('input[name="password"]').type('123455');
        //to detect the click
        cy.get('button').contains('Login').click();

        cy.get('h3').should('have.text', 'ESG Dashboard');
        //navigate to register
        // cy.get('a[href="#/register"]').click();


        // Request Example
        // cy.request('GET', 'http://localhost:9090/category')
        //     .then((res) => {
        //         expect(res.status).to.eq(201);
        //         expect(res.body).to.have.property('name', 'New Event');
        //     })
    });
})