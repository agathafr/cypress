import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 500,
  viewportHeight: 500,
  video: false,
  responseTimeout: 2500,
  projectId: '134ej7',
  experimentalFetchPolyfill: true,
  e2e: {
    supportFile: false,
  },
  component: {
    devServer: {
      bundler: 'vite',
      framework: 'svelte',
    },
    setupNodeEvents (on, config) {
      require('@cypress/code-coverage/task')(on, config)

      return config
    },
  },
})
