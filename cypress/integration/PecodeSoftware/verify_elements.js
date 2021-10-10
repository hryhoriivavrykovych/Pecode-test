/// <reference types="cypress" />

describe('verify elements test', function () {

    this.beforeEach( function() {
        cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php')
    });

    it('TDD Assertion', function(){
        cy.log('-- Length Check')
        cy.get('input[name="username"]').should('have.length', 1)
        cy.get('input[name="password"]').should('have.length', 1)
        cy.get('input[type="submit"]').should('have.length', 1)
    })
})