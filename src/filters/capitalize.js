import upperFirst from '../helpers/upperFirst'

export default function (value) {
  if (value?.length) {
    value = upperFirst(value, true)
  }
  return value
}