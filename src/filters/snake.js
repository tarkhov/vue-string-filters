import snakeWords from '../helpers/snakeWords'

export default function (value, options) {
  if (value?.length) {
    let list = snakeWords(value, options?.numbers)
    if (list.length > 1) {
      list = list.map(function (word) {
        return word.toLowerCase()
      })
      value = list.join('_')
    }
  }
  return value
}
