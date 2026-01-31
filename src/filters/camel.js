import upperFirst from '../helpers/upperFirst'
import words from '../helpers/words'

export default function (value, options) {
  if (value?.length) {
    let list = words(value, options?.numbers)
    if (list.length > 1) {
      if (options?.first) {
        list = list.map(function (word) {
          return upperFirst(word)
        })
      } else {
        let first = list.shift()
        list = list.map(function (word) {
          return upperFirst(word)
        })
        list.unshift(first)
      }
      value = list.join('')
    }
  }
  return value
}