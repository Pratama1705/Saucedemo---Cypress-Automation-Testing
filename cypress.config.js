const { defineConfig } = require('cypress');
const { getObjectModels } = require('./cypress/utils/YAMLReader');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        // Run YAML Reader to Get Object Selectors
        getObjectModels({ component, language }) {
          return getObjectModels(component, language);
        },
      });
    },
  },
});
