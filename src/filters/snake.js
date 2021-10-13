import snakeWords from '../helpers/snakeWords'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && (typeof binding.value === 'undefined' || binding.value)) {
      let list = snakeWords(el.value, binding.modifiers?.numbers || binding.value?.numbers)
      if (list.length > 1) {
        list = list.map(function (value) {
          return value.toLowerCase()
        })
        el.value = list.join('_')
      }
    }
  }
}
