import { defineConfig } from 'cypress'

export default defineConfig({
  <% if (e2e) { %>
  e2e: {
    'baseUrl': '<%= baseUrl%>',
  },
  <% } %>
  <% if (ct) { %>
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  }
  <% } %>
})