module.exports = (src) => {
  let len = src.length
  let base = 1
  let decVal = 0

  for (let i = len - 1; i >= 0; i--) {
    if (src.charAt(i) >= "0" && src.charAt(i) <= "9") {
      decVal += (src.charAt(i).charCodeAt(0) - 48) * base
      base = base * 16
    } else if (src.charAt(i) >= "A" && src.charAt(i) <= "F") {
      decVal += (src.charAt(i).charCodeAt(0) - 55) * base
      base = base * 16
    }
  }

  return decVal
}