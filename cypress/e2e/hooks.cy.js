describe('HOOKS demo', () => {
    before(() => {  // runs once before the first test in this block
        cy.log('Before');
    });

    beforeEach(() => { // runs before each test in this block
        cy.log('Before Each');
    });

    afterEach(() => {  // runs after each test in this block
        cy.log('After Each');
    });

    after(() => {  // runs once after the last test in this block
        cy.log('After');
    });

    it('TC #1', () => {
        console.log('TC #1')
    });
    it('TC #2', () => {
        console.log('TC #2')
    });
    it('TC #3', () => {
        console.log('TC #3')
    });
});
