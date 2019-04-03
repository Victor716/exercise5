module.exports = function (str) {
  // TODO
  // var reg = /^\D(?![A-Z])(.*)$/
  var reg = /^\D[^A-Z](.*)$/
  return reg.test(str);
}