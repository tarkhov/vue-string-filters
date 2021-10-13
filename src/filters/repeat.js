export default function (value, options) {
  if (value?.length && options) {
    if (options.string && options.count) {
      value = value + options.string.repeat(options.count)
    }
  }
  return value
}
