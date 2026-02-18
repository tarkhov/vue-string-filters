import {
  camelCase,
  capitalize,
  flatCase,
  kebabCase,
  pad,
  pascalCase,
  snakeCase,
  titleCase,
  trainCase,
  truncate
} from 'string-filters'

const VueStringFilters = {
  install(app) {
    app.config.globalProperties.$filters = {
      camelCase,
      capitalize,
      flatCase,
      kebabCase,
      pad,
      pascalCase,
      snakeCase,
      titleCase,
      trainCase,
      truncate
    }
  }
}

export { VueStringFilters }