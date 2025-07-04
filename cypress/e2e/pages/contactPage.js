// cypress/e2e/pages/contactPage.js

class ContactPage {

    contactSection() {
        cy.get('#contato').click(); // Clica na seção de contato
    }

    validTitleSection() {
        return cy.contains('h2', 'Entre em Contato').should('be.visible'); //  valida o título da seção
    }

    fillName() {
        cy.get('label[for="nome"]').should('be.visible').and('contain', 'Nome'); //valida se o label nome está visivel
        cy.get('#nome').should('be.visible').click().type('Deisi'); // valida se o campo nome está visivel, clica e digita o nome
    }

    fillEmail() {
        cy.get('label[for="email"]').should('be.visible').and('contain', 'E-mail');
        cy.get('#email').should('be.visible').click().type('deise_qa@teste.com');
    }

    fillMessage() {
        cy.get('label[for="mensagem"]').should('be.visible').and('contain', 'Mensagem');
        cy.get('#mensagem').should('be.visible').click().type('Teste da Deisi para vaga de QA na Codex foi enviado :)');
    }

    buttonSubmit() {
        cy.contains('button', 'Enviar').click();
    }

}

export default new ContactPage();