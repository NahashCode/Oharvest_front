describe('surfing on homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/reservation');
    });
    it('should display weather icon and shop open', () => {
        cy.get('button.react-datepicker__navigation.react-datepicker__navigation--next').click();
        cy.get('div.react-datepicker__day.react-datepicker__day--005.react-datepicker__day').click();
        cy.pause();
    });
});