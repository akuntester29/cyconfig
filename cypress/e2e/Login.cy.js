describe('E2E Login account', () => {
    it('Login account', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.get('.pa).click();
      cy.get('#email').click().type('yacobus.ranger@gmail.com');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').click().type('Password123');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    });
});
