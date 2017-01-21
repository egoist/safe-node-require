/* eslint-disable import/no-dynamic-require */
const path = require('path')

function isFile(input) {
  return /^(\.|\/)/.test(input)
}

module.exports = function (from) {
  if (isFile(from)) {
    from = path.resolve(process.cwd(), from)
  }
  try {
    return require(from)
  } catch (err) {
    // the file/module does not exist
    if (err.message.indexOf(`Cannot find module '${from}'`) > -1) {
      return null
    }
    throw err
  }
}
