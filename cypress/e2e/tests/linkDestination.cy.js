// cypress/e2e/tests/linkDestination.cy.js

import linkDestinationPage from '../pages/destinationPage';

describe('Destinos - Cenário de Falha Intencional', () => {

    it('Link "Destinos" leva a uma página local inválida após outro clique', () => {

        cy.visit('index.html');

        linkDestinationPage.contactSection();

        // Localiza o link Destinos na navbar, rola até ele, foca e clica
        cy.get('nav').contains('Destinos').scrollIntoView().focus().click();

        linkDestinationPage.destinationSection();

    });
});
