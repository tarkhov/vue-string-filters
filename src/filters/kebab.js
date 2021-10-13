import kebabWords from '../helpers/kebabWords'

export default function (value, options) {
  if (value?.length) {
    let list = kebabWords(value, options?.numbers)
    if (list.length > 1) {
      list = list.map(function (word) {
        return word.toLowerCase()
      })
      value = list.join('-')
    }
  }
  return value
}
