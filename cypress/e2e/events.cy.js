describe('Events', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8081', {
            fixture: 'list-event.json'
        }).as('list-events')
    })

    it ('Should list all events', () => {
        cy.visit('/');
        cy.wait('@list-events')
    })
})