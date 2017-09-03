module.exports = function (str) {
  return /^[0-9]+\.(jpg|jpeg)$/.test(str)
    //return /\d+\.jpe?g$/.test(str)
} ``