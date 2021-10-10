/// <reference types="cypress" />

describe('login test', function () {

    before( function() {
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('login test', function () {
        cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php')
            cy.get('input[name="username"]').type('this.data.username')
            cy.get('input[name="password"]').type('this.data.password')
            cy.get('input[type="submit"]').contains('Login').should('be.visible').click
    })
})