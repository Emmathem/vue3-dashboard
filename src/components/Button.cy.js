/// reference types="cypress" />

import { mount } from "cypress/vue";
import Button from "../components/Button.vue";

describe("Test Button", () => {
  it('Test for props', () => {
    mount(Button, {
      propsData: {
        text: 'Login',
        type: 'button'
      }
    });

    cy.get('text').should('have.text', 'Login');
  })
})