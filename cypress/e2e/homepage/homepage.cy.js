describe('surfing on homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });
    it('should display weather icon and shop open', () => {
        cy.wait(3000);
        cy.get('p.notification__content').should('have.text', 'La cueillette est actuellement OUVERTE !');
        cy.get('div.notification').should('contain.html', 'img');
    });
});