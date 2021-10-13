import pad from '../helpers/pad'

export default function (value, options) {
  if (value?.length) {
    let count = 0
    let chars = ' '

    if (options && options.chars && options.count) {
      count = options.count
      chars = options.chars
    }

    if (options?.start) {
      value = value.padStart(count, chars)
    } else if (options?.end) {
      value = value.padEnd(count, chars)
    } else {
      value = pad(value, count, chars)
    }
  }
  return value
}
