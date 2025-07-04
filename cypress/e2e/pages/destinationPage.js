// cypress/e2e/pages/destinationPage.js

class linkDestinationPage {

    contactSection() {
        cy.get('#contato').click(); // Clica na seção de contato
    }

    destinationSection() {
        cy.get('#destinos').click(); // Clica na seção de Destinos
    }
}

export default new linkDestinationPage;
