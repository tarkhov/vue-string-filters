import { createApp } from 'vue'
import camel from './filters/camel'
import capitalize from './filters/capitalize'
import kebab from './filters/kebab'
import lower from './filters/lower'
import pad from './filters/pad'
import repeat from './filters/repeat'
import replace from './filters/replace'
import snake from './filters/snake'
import truncate from './filters/truncate'
import upper from './filters/upper'
import StringFiltersMixin from './mixins/StringFiltersMixin'

const VueStringFilters = {
  install(app) {
    app.directive('camel', camel)
    app.directive('capitalize', capitalize)
    app.directive('kebab', kebab)
    app.directive('lower', lower)
    app.directive('pad', pad)
    app.directive('repeat', repeat)
    app.directive('replace', replace)
    app.directive('snake', snake)
    app.directive('truncate', truncate)
    app.directive('upper', upper)
  }
}

const app = createApp({})
app.use(VueStringFilters)

export {
  camel,
  capitalize,
  kebab,
  lower,
  pad,
  repeat,
  replace,
  snake,
  truncate,
  upper,
  StringFiltersMixin
}

export default VueStringFilters