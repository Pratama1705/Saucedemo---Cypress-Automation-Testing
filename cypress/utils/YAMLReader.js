const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function getObjectModels(component, language) {
  const [module, page, elementName] = component.split('/');
  const yamlPath = path.resolve(`cypress/object/${module}/${page}.yaml`);

  const file = fs.readFileSync(yamlPath, 'utf8');
  const data = yaml.load(file);

  const elementData = data?.objectModels?.[elementName]?.[language];
  if (!elementData) {
    throw new Error(`Element not found for ${component} in ${language}`);
  }

  const [type, value] = elementData.split('==');
  return { type, value };
}

module.exports = { getObjectModels };
