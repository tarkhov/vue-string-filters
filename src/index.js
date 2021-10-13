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
  install (Vue) {
    Vue.directive('camel', camel)
    Vue.directive('capitalize', capitalize)
    Vue.directive('kebab', kebab)
    Vue.directive('lower', lower)
    Vue.directive('pad', pad)
    Vue.directive('repeat', repeat)
    Vue.directive('replace', replace)
    Vue.directive('snake', snake)
    Vue.directive('truncate', truncate)
    Vue.directive('upper', upper)
  }
}

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

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueStringFilters)
}
