import upperFirst from '../helpers/upperFirst'
import upperEvery from '../helpers/upperEvery'

export default function (value, options) {
  if (value?.length) {
    if (options?.first) {
      const capitalize = options.capitalize
      if (options.every) {
        value = upperEvery(value, capitalize)
      } else {
        value = upperFirst(value, capitalize)
      }
    } else {
      value = value.toUpperCase()
    }
  }
  return value
}
