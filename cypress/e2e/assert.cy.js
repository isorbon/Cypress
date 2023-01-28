describe('Assertion Demo', () =>{
    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button');
    });

    it('TDD Assertions', () => {
        cy.log('-- Length Check');
        cy.get('input[type="radio"]').should('have.length', 3);

        cy.log('-- Class Check');
        cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled');

        cy.log('-- Exist Check');
        cy.get('.mt-3').should('not.exist');

        //Multiple Assertions
        cy.log('-- Text Check');
        cy.get('input[type="radio"]').eq(0).click({force: true});
        cy.get('.mt-3')
        .should('have.text', 'You have selected Yes')
        .and('include.text', 'Yes')
        .and('not.contain', 'test');

        cy.log('-- CSS Check');
        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)');

    });

    it.only('BDD Assertions', () => {
        //Should call back & Multiple assertions
        cy.log('-- Length Check - Class Check');
        cy.get('input[type="radio"]').should($element => {
            expect($element).to.have.lengthOf(3)
            expect($element).to.have.class('disabled')
        })

        cy.log('-- Text Check');
        cy.get('input[type="radio"]').eq(1).click({force: true});
        cy.get('.mt-3').should($element => {
            expect($element).to.have.text('You have selected Impressive')
            expect($element).to.include.text('Impressive')
            expect($element).to.not.include.text('No')
        })

    });
})