module.exports = (zipCode, index, chr) => {
  if (index > zipCode.length - 1) return zipCode
  return zipCode.substring(0, index) + chr + zipCode.substring(index + 1)
}
