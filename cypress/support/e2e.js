// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
const {v4:uuidv4}=require('uuid')

describe('post',()=>{
    it('user can create posts',()=>{
        cy.visit('http://localhost:3000/Blog')
        //click on create post
        cy.visit('http://localhost:3000/Blog/create')
        //fill in input fields
        const title=uuidv4()
        cy.findByRole('textbox', {  name: /title:/i}).type(title)
        cy.findByRole('textbox', {  name: /author:/i}).type('Cypress')
        cy.findByRole('textbox', {  name: /content:/i}).type('Testing attempt. Ran an end-end test')
        //click submit
        cy.findByRole('button', {  name: /create post/i}).should('not.be.disabled')
        cy.findByRole('button', {  name: /create post/i}).click()
        //check home
        cy.findByRole('link', {  name: /home/i}).click()
        //click on postdetail
        cy.findByText(title).scrollIntoView()
        cy.findByText(title).click()
    })
})