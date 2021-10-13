export default function (value, options) {
  if (value?.length && options?.regexp) {
    value = value.replace(new RegExp(options.regexp, options.flags), options.string || '')
  }
  return value
}
