import truncate from '../helpers/truncate'

export default function (value, options) {
  let length = value?.length
  if (length) {
    let omission = '...'
    let count = binding.arg

    if (options && options.count && options.omission) {
      count = options.count
      omission = options.omission
    }

    if (length > count) {
      value = truncate(value, count, omission)
    }
  }
  return value
}
