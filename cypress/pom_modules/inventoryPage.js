class inventoryPage{

    elements = {
        titleSpan: () => cy.get('span.title')
    }

}

module.exports = new inventoryPage();