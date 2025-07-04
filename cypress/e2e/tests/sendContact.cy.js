// cypress/e2e/tests/sendContact.cy.js

import contactPage from '../pages/contactPage';

describe('Formulário de Contato', () => {

    it('Deve preencher e enviar o formulário de contato', () => {

        cy.visit('index.html');

        contactPage.contactSection(); // clica na seção Contato no navbar
        contactPage.validTitleSection(); // Valida se o título da seção de contato está visível 
        contactPage.fillName(); // preenche o campo Nome
        contactPage.fillEmail(); // preenche o campo E-mail
        contactPage.fillMessage(); // preenche o campo Mensagem
        contactPage.buttonSubmit(); // clica no botão enviar

        // O Cypress automaticamente aceita (clica em "OK") para qualquer alerta
        cy.log('Formulário enviado com sucesso — alerta esperado: "Mensagem enviada com sucesso!"');
    });
});