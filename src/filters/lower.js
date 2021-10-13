export default function (value, options) {
  if (value?.length) {
    if (options?.first) {
      value = value.charAt(0).toLowerCase() + value.slice(1)
    } else {
      value = value.toLowerCase()
    }
  }
  return value
}
